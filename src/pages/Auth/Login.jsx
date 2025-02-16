import { useState } from "react";
import Modal from "../../components/Modal";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          로그인
        </h2>
        <form>
          {/* 이메일 입력 필드 */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 로그인 버튼 */}
          <button type="submit" className="w-full btn cursor-pointer">
            로그인
          </button>
        </form>

        {/* 회원가입 링크 */}
        <p className="mt-4 text-center">
          계정이 없으신가요?{" "}
          <a href="/register" className="text-purple-700 hover:underline">
            회원가입
          </a>
        </p>
      </div>

      {modalOpen && (
        <Modal
          message="이 값이 맞습니까?"
          onClose={setModalOpen}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Login;
