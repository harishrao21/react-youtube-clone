
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchPopularVideos, searchVideos } from "../api/youtube";
import styles from "./home.module.css";

function Home() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  // 🔥 Load Videos Function
  const loadVideos = async (pageToken = "", isLoadMore = false) => {
    try {
      setLoading(true);
      let data;

      if (searchQuery) {
        data = await searchVideos(searchQuery, pageToken);
      } else {
        data = await fetchPopularVideos(pageToken);
      }

      if (isLoadMore) {
        // append videos
        setVideos((prev) => [...prev, ...data.items]);
      } else {
        // first load
        setVideos(data.items);
      }

      setNextPageToken(data.nextPageToken || "");
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 When Search Changes
  useEffect(() => {
    setVideos([]);
    loadVideos();
  }, [searchQuery]);

  return (
    <div className={styles["home-container"]}>
      <h2>
        {searchQuery
          ? `🔎 Results for "${searchQuery}"`
          : " Trending Videos"}
      </h2>

      <div className={styles["video-grid"]}>
        {videos.map((video) => {
          const videoId = video.id.videoId || video.id;

          return (
            <Link
              to={`/watch/${videoId}`}
              key={videoId}
              className={styles["video-card"]}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div className={styles["video-info"]}>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 🔥 LOAD MORE BUTTON */}
      {nextPageToken && (
        <button
          onClick={() => loadVideos(nextPageToken, true)}
          disabled={loading}
          className={styles["load-more"]}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default Home;
