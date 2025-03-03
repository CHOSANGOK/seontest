const Register = () => {
  const checkPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          회원가입
        </h2>
        <form>
          {/* 이름 입력 필드 */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              이름
            </label>
            <input
              type="text"
              required={true}
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 이메일 입력 필드 */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              required={true}
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              required={true}
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 비밀번호 확인 입력 필드 */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              required={true}
              id="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
            />
          </div>
          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full btn cursor-pointer"
            onClick={() => checkPassword()}
          >
            회원가입
          </button>
        </form>
        {/* 로그인 링크 */}
        <p className="mt-4 text-center">
          이미 계정이 있으신가요?{" "}
          <a href="/login" className="text-purple-700 hover:underline">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
