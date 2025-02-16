import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* 로고 영역 */}
          <Link to={"/"}>
            <p className=" text-3xl font-bold text-purple-700">logo</p>
          </Link>
        </div>

        {/* 오른쪽: 로그인/로그아웃 버튼 */}
        <div>
          {!isLoggedIn ? (
            <Link
              to={"/login"}
              className="btn"
              onClick={() => setIsLoggedIn(true)}
            >
              로그인
            </Link>
          ) : (
            <Link to={"/"} onClick={() => setIsLoggedIn(false)} className="btn">
              로그아웃
            </Link>
          )}
        </div>
      </nav>

      {/* 왼쪽 사이드바(모달형 메뉴) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0 " : "-translate-x-full "
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5">
          {/* 닫기 버튼 */}

          <div className="flex items-center pb-2">
            {/* 햄버거 메뉴 버튼 */}
            <button
              onClick={() => setMenuOpen(false)}
              className="mr-2 focus:outline-none cursor-pointer py-2 meun"
            >
              <svg
                className="w-6 h-6 mx-2 text-purple-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* 로고 영역 */}
            <Link to={"/"}>
              <p className="text-3xl font-bold text-purple-700">logo</p>
            </Link>
          </div>
          {/* 메뉴 항목 */}
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-purple-700"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/videolibrary"
                onClick={() => setMenuOpen(false)}
                className="text-purple-700"
              >
                영상
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-purple-700"
              >
                상품등록
              </Link>
            </li>
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
