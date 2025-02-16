import VideoCard from "@/components/Video/VideoCard";

const VideoLibrary = () => {
  const testVideoArray = [
    {
      id: 1,
      title: "붕산 재결정실험",
      description: "붕산 실험 영상",
      url: "https://www.youtube.com/watch?v=mXXgJZeiVnY&t=1s",
    },
    {
      id: 2,
      title: "두 번째 영상",
      description: "설명 2",
      url: "https://via.placeholder.com/400x225",
    },
    {
      id: 3,
      title: "세 번째 영상",
      description: "설명 3",
      url: "https://via.placeholder.com/400x225",
    },
    {
      id: 4,
      title: "네 번째 영상",
      description: "설명 4",
      url: "https://via.placeholder.com/400x225",
    },
    {
      id: 5,
      title: "다섯 번째 영상",
      description: "설명 5",
      url: "https://via.placeholder.com/400x225",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* 페이지 제목 */}
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Video Archive</h1>
      {/* 업로드 버튼 */}
      <div className="mb-6">
        <button className="btn">영상 업로드</button>
      </div>
      {/* 영상 카드  */}
      <div className="flex flex-wrap">
        {testVideoArray.map((video) => (
          <div
            key={video.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
