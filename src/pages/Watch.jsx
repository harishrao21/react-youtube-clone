// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchVideoById } from "../api/youtube";

// function Watch() {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadVideo = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchVideoById(id);
//         setVideo(data);
//       } catch (error) {
//         console.error("Error loading video:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadVideo();
//   }, [id]);

//   if (loading) return <h2>Loading...</h2>;
//   if (!video) return <h2>Video Not Found</h2>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <iframe
//         width="100%"
//         height="500"
//         src={`https://www.youtube.com/embed/${id}`}
//         title={video.snippet.title}
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>

//       <h2>{video.snippet.title}</h2>
//       <p>{video.snippet.channelTitle}</p>
//       <p>{video.statistics.viewCount} views</p>
//       <p>{video.snippet.description}</p>
//     </div>
//   );
// }

// export default Watch;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVideoById, fetchPopularVideos } from "../api/youtube";
import styles from "./watch.module.css";

function Watch() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [recommended, setRecommended] = useState([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const videoData = await fetchVideoById(id);
  //       setVideo(videoData);

  //       const recData = await fetchPopularVideos();
  //       setRecommended(recData.items.filter(v => v.id !== id));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  useEffect(() => {
  const loadData = async () => {
    try {
      const videoData = await fetchVideoById(id);
      setVideo(videoData);
        
      const recData = await fetchPopularVideos();
       setRecommended(recData.items.filter(v => v.id !== id));
      // 🔥 SAVE TO HISTORY
      const history = JSON.parse(localStorage.getItem("watchHistory")) || [];

      const newHistory = [
        videoData,
        ...history.filter((item) => item.id !== id),
      ];

      localStorage.setItem("watchHistory", JSON.stringify(newHistory.slice(0, 20)));

    } catch (error) {
      console.error(error);
    }
  };

  

    loadData();
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  return (
    <div className={styles.watchContainer}>
      
      {/* LEFT SIDE - VIDEO */}
      <div className={styles.videoSection}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={video.snippet.title}
          allowFullScreen
        ></iframe>

        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.channelTitle}</p>
        <p>{video.statistics.viewCount} views</p>
      </div>

      {/* RIGHT SIDE - RECOMMENDED */}
      <div className={styles.recommended}>
        <h3>Recommended</h3>

        {recommended.map((item) => (
          <Link
            key={item.id}
            to={`/watch/${item.id}`}
            className={styles.recCard}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Watch;
