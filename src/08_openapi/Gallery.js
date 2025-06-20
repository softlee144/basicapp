import GalleryCard from "./GalleryCard";
import TailButton from "./../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  // 갤러리 원본 데이터(배열)
  const [tdata, setTdata] = useState([]);
  // GalleryCard 컴포넌트 리스트(배열)
  const [cards, setCards] = useState([]);
  // 검색어 input 참조 객체
  const inRef = useRef();

  // 공공 API에서 이미지 데이터 fetch
  const getFetchData = () => {
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${process.env.REACT_APP_API_KEY}`;
    url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${encodeURI(inRef.current.value)}&_type=json`;

    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.response.body.items.item)) // 배열로 저장
      .catch((err) => console.error(err));
  };

  // [확인] 버튼 클릭 핸들러
  const handelOk = (e) => {
    e.preventDefault();

    // 검색어 미입력 시 안내
    if (inRef.current.value === "") {
      alert("키워드를 입력하세요");
      inRef.current.focus();
      return;
    }

    getFetchData(); // 데이터 조회
  };

  // [취소] 버튼 클릭 핸들러 (추후 확장 가능)
  const handelClear = () => {
    // 예: 입력 초기화, 결과 초기화 등 구현 가능
  };

  // 컴포넌트 마운트 시 input 자동 포커스
  useEffect(() => {
    inRef.current.focus();
  }, []);

  // tdata 변경 시 cards 배열(GalleryCard 리스트) 생성
  useEffect(() => {
    let tm = tdata.map((item) => (
      <GalleryCard key={item.galContentId} item={item} />
    ));
    setCards(tm);
  }, [tdata]);

  // 렌더링
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* 검색 폼 영역 */}
      <form className="w-10/12 h-24 flex justify-center items-center">
        <div>
          {/* 검색어 입력 */}
          <input
            type="text"
            id="txt1"
            ref={inRef}
            className="form-input rounded w-full"
          />
        </div>
        <div>
          {/* 확인/취소 버튼 */}
          <TailButton caption="확인" bcolor="blue" handleClick={handelOk} />
          <TailButton
            caption="취소"
            bcolor="orange"
            handleClick={handelClear}
          />
        </div>
      </form>
      {/* 카드 리스트 영역 */}
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cards}
      </div>
    </div>
  );
}
