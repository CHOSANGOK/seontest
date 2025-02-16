import PropTypes from "prop-types";

const Modal = ({ message, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 어두운 배경(오버레이) - 클릭 시 onClose 호출 */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => onClose(false)}
      ></div>

      {/* 모달창 */}
      <div className="bg-white rounded-lg shadow-md p-6 relative z-10 w-full max-w-sm">
        {/* X 버튼 - 우측 상단 */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 모달 내용 */}
        <div className="mb-4">
          <p className="text-gray-800">{message}</p>
        </div>

        {/* 확인 버튼 */}
        <div className="flex justify-end">
          <button onClick={() => onConfirm()} className="btn cursor-pointer">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
