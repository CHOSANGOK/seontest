import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogin = () => {
    setMenuOpen(false);
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <nav className="flex items-center justify-between bg-purple-100 p-4 shadow-md">
        <div className="flex items-center">
          {/* 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMenuOpen(true)}
            className="mr-2 focus:outline-none cursor-pointer py-2 meun"
          >
            <svg
              className="w-6 h-6 mx-2 text-purple-700"
              fill="none"
              stroke="currentColor"
              viewBox="2 2 20 20"
            >
              <path
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* 로고 영역 */}
          <Link to={"/"}>
            <p className=" text-3xl font-bold text-purple-700">YES</p>
          </Link>
        </div>
      </nav>

      {/* 왼쪽 사이드바(모달형 메뉴) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0 " : "-translate-x-full "
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* 로고 영역 */}
        <Link to={"/"} onClick={() => setMenuOpen(false)}>
          <p className="p-3 text-3xl font-bold text-purple-700">YES</p>
        </Link>
        <div className="py-5">
          {/* 닫기 버튼 */}
          <div className="flex items-center py-3 bg-fuchsia-100">
            {/* 햄버거 메뉴 버튼 */}
            {/* 오른쪽: 로그인/로그아웃 버튼 */}
            <div className="py-3">
              {!isLoggedIn ? (
                <Link to={"/login"} className="btn" onClick={() => setLogin()}>
                  로그인
                </Link>
              ) : (
                <Link
                  to={"/"}
                  onClick={() => setIsLoggedIn(false)}
                  className="ml-2"
                >
                  000회원님 안녕하세요.
                </Link>
              )}
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-0 mr-2 focus:outline-none cursor-pointer py-2 meun"
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
          </div>

          {/* 메뉴 항목 */}
          <ul className="py-2 text-xl">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-purple-700"
            >
              <li className="menuLi my-2 py-2 pl-3">Home</li>
            </Link>
            {/* <Link to="/videolibrary" onClick={() => setMenuOpen(false)}>
              <li className="menuLi my-2 py-2 pl-3 text-purple-700 cursor-pointer">
                영상
              </li>
            </Link> */}
            {/* 관리자 로그인 시 보이도록 설정
            <li className="menuLi my-2 py-2 pl-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-purple-700"
              >
                상품등록
              </Link>
            </li> */}
            {/* 필요한 메뉴 추가 */}
          </ul>
        </div>
      </div>

      {/* 사이드바 외부 클릭 시 닫히는 오버레이 */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Nav;
