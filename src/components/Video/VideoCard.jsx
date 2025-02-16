import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`, { state: { video } }); // 비디오 상세 정보 전달
  };

  return (
    <div
      className="m-2 p-2 bg-white rounded-lg shadow-md overflow-hidden"
      onClick={handleClick}
    >
      <img
        src="https://via.placeholder.com/400x225"
        alt="Video Thumbnail"
        className="w-full"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-purple-700">{video.title}</h2>
        <p className="text-gray-600 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
