const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchPopularVideos = async () => {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=12&regionCode=IN&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};

export const fetchSearchVideos = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&maxResults=12&q=${encodeURIComponent(
      query
    )}&type=video&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items.map((item) => ({
    id: item.id.videoId,
    snippet: item.snippet,
  }));
};
