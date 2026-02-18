import { useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams(); // Video ID from URL

  return (
    <div style={{ padding: "20px" }}>
      <h2>Video Player</h2>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default Watch;
