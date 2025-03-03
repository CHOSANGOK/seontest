import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

// YouTube 영상 정보 가져오기
export const getVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet",
        id: videoId,
        key: API_KEY,
      },
    });

    return response.data.items[0] || null;
  } catch (error) {
    console.error("YouTube API Error:", error);
    return null;
  }
};

export const extractVideoId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );

  return match ? match[1] : null;
};
