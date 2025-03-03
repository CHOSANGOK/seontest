import VideoCard from "@/components/Video/VideoCard";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { getVideoDetails, extractVideoId } from "@/api/youtubeApi";

const VideoLibrary = () => {
  const [modal, setModal] = useState(false);
  const [testVideoArray, setTestVideoArray] = useState([]);
  const [upLoadVideo, setUpLoadVideo] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      if (upLoadVideo) {
        const videoId = extractVideoId(upLoadVideo);

        if (!videoId) return alert("올바른 YouTube URL이 아닙니다.");

        try {
          const videoData = await getVideoDetails(videoId);

          if (videoData) {
            setTestVideoArray((prev) => [...prev, videoData]);
            setModal(false);
          } else {
            alert("비디오 정보를 가져오지 못했습니다.");
          }
        } catch (error) {
          alert("YouTube API 요청 실패:", error);
        }
      }
    };

    fetchVideo();
  }, [upLoadVideo]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* 페이지 제목 */}
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Video Archive</h1>
      {/* 업로드 버튼 */}
      <div className="mb-6">
        <button onClick={() => setModal(true)} className="btn cursor-pointer">
          영상 업로드
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          setModal={setModal}
          setUpLoadVideo={setUpLoadVideo}
        />
      )}
      {/* 영상 카드  */}
      <div className="flex flex-wrap w-full">
        {testVideoArray.length > 0 ? (
          testVideoArray.map((video) => (
            <div
              key={video.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <VideoCard videoId={video.id} video={video.snippet} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">불러올 영상이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default VideoLibrary;
