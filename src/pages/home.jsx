import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPopularVideos, fetchSearchVideos } from "../api/youtube";
import styles from "./Home.module.css";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      let data;
      if (searchQuery) {
        data = await fetchSearchVideos(searchQuery);
      } else {
        data = await fetchPopularVideos();
      }
      setVideos(data);
      setLoading(false);
    };
    getVideos();
  }, [searchQuery]); // Run whenever search changes

  if (loading) return <p>Loading videos...</p>;

  return (
    <div className={styles.videoContainer}>
      {videos.map((video) => {
        const videoId = video.id.videoId || video.id;
        return (
          <div
            key={videoId}
            className={styles.videoCard}
            onClick={() => navigate(`/watch/${videoId}`)}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className={styles.videoInfo}>
              <h4>{video.snippet.title}</h4>
              <p className="channel">{video.snippet.channelTitle}</p>
              <p className="extra">
                {video.statistics
                  ? `${video.statistics.viewCount} views • ${new Date(
                      video.snippet.publishedAt
                    ).toLocaleDateString()}`
                  : ""}
              </p>
            </div>
          </div>
        );
      })}
      <pagination 
      currentPage={page}
      hasNext={!!nextToken}
      hasPrev={prev >1}
      onNext={handleNext}
      onPrev={handlePrev}
      />
    </div>
  );
}

export default Home;
