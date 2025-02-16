import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const location = useLocation();
  const video = location.state?.video;

  const getEmbedUrl = (url) => {
    if (!url) return "";
    return url.replace("watch?v=", "embed/").split("&")[0];
  };

  // embedUrl이 없으면 null을 반환하도록 처리
  const embedUrl = video && video.url ? getEmbedUrl(video.url) : null;
  console.log("video", video, "embedUrl", embedUrl);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 ">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        {video ? video.title : "Video Detail"}
      </h1>
      <div className="w-full max-w-4xl">
        {embedUrl ? (
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              title="YouTube Video"
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-center text-red-500">비디오 URL이 없습니다.</p>
        )}
        <p className="mt-4 text-gray-700">
          {video ? video.description : "No description available."}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
