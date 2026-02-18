import { useState } from "react";

function Upload() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Video Uploaded: " + title);
    setTitle("");
  };

  return (
    <div>
      <h2>Upload Video</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
