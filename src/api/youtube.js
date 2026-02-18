const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

/* =========================================
   🔥 FETCH TRENDING / POPULAR VIDEOS
========================================= */
export const fetchPopularVideos = async (pageToken = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=12&pageToken=${pageToken}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch popular videos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Popular Videos Error:", error);
    throw error;
  }
};

/* =========================================
   🔍 SEARCH VIDEOS (WITH PAGINATION)
========================================= */
export const searchVideos = async (query, pageToken = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=12&type=video&q=${encodeURIComponent(
        query
      )}&pageToken=${pageToken}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to search videos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search Videos Error:", error);
    throw error;
  }
};

/* =========================================
   🎥 FETCH SINGLE VIDEO DETAILS
========================================= */
export const fetchVideoById = async (videoId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch video details");
    }

    const data = await response.json();

    // YouTube API returns array inside items
    return data.items[0];
  } catch (error) {
    console.error("Single Video Error:", error);
    throw error;
  }
};


