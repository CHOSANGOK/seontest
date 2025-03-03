import { useNavigate } from "react-router-dom";

const VideoCard = ({ videoId, video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${videoId}`, { state: { video } }); // 비디오 상세 정보 전달
  };

  return (
    <div
      className="m-2 p-3 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
      onClick={handleClick}
    >
      {/* 썸네일 */}
      <img
        src={
          video.thumbnails?.high?.url || "https://via.placeholder.com/400x225"
        }
        alt={video.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* 영상 정보 */}
      <div className="p-4">
        <h2
          className="text-lg font-semibold text-purple-700 truncate"
          title={video.title} // 전체 제목을 툴팁으로 표시
        >
          {video.title.length > 15
            ? video.title.slice(0, 15) + "..."
            : video.title}
        </h2>
        <p className="text-gray-600 text-sm truncate">
          {video.description || "설명이 없습니다."}
        </p>
        <p className="text-sm text-gray-500 mt-2">📺 {video.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
