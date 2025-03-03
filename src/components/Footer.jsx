const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-6 text-center w-full">
      <div className="max-w-7xl w-full mx-auto px-6">
        {/* 맨 위로 가기 버튼 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block w-full text-center py-3 mb-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
        >
          맨 위로 가기 ∧
        </button>

        {/* 상단 3단 구성 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-6">
          <div>
            <p className="font-semibold">CS CENTER</p>
            <p>031-514-7771</p>
            <p>E-mail: sales@youngee.co.kr</p>
            <p>평일: AM 09:00 ~ PM 06:00</p>
          </div>

          {/* 구분선 - 작은 화면에서는 위쪽(border-t), 큰 화면에서는 왼쪽(border-l)만 표시 */}
          <div className="border-t md:border-l md:border-t-0 border-gray-300 pt-6 md:pt-0 md:pl-6">
            <p className="font-semibold">Contact Us</p>
            <p>회사소개 기술자료 고객지원</p>
            <p>설치후기 견적요청</p>
          </div>

          {/* 구분선 - 작은 화면에서는 위쪽(border-t), 큰 화면에서는 왼쪽(border-l)만 표시 */}
          <div className="border-t md:border-l md:border-t-0 border-gray-300 pt-6 md:pt-0 md:pl-6">
            <p className="font-semibold">COMPANY</p>
            <p>영이과학기기</p>
            <p>주소: 경기도 양평군 용문면 조현리 430-3 1층</p>
            <p>대표: 김민화</p>
            <p>사업자등록번호: 427-66-00313</p>
            <p>전화: 031-514-7771</p>
            <p>통신판매업신고번호: 2020-경기양평-0392</p>
            <p>개인정보 보호책임자: 김민화</p>
          </div>
        </div>

        {/* Copyright 섹션 */}
        <div className="pt-6 text-sm text-gray-500">
          <p>Copyright © 2024 영이과학기기. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
