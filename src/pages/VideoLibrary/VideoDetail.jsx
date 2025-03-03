import { useLocation, useParams } from "react-router-dom";

const VideoDetail = () => {
  const location = useLocation();
  const video = location.state?.video;
  const { id } = useParams();

  const embedUrl = id ? `https://www.youtube.com/embed/${id}` : null;
  const convertLinksToAnchorTags = (text) => {
    if (!text) return "설명이 없습니다.";

    // 정규식: URL 패턴을 찾기
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        const url = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 ">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        {video ? video.title : "Video Detail"}
      </h1>
      <>
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className="text-center text-red-500">비디오 URL이 없습니다.</p>
          )}
        </div>
        {convertLinksToAnchorTags(video.description)}
      </>
    </div>
  );
};

export default VideoDetail;
