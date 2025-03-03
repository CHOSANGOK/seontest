import { useState } from "react";

const Modal = ({ isOpen, setModal, setUpLoadVideo }) => {
  const [url, setUrl] = useState("");

  if (!isOpen) return;

  const onClose = () => {
    setModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* 닫기 버튼 (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6 mx-2 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="2 2 20 20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>

        {/* 제목 */}
        <h2 className="text-lg font-semibold text-purple-700 mb-4">
          유튜브 URL 입력 해주세요
        </h2>

        {/* URL 입력 필드 */}
        <input
          type="text"
          placeholder="YouTube 영상 URL 입력"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        {/* 확인 & 취소 버튼 */}
        <div className="flex justify-end space-x-2">
          <button onClick={() => setUpLoadVideo(url)} className="btn">
            확인
          </button>
          <button onClick={onClose} className="btn">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
