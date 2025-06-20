import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  /* 1. 상태(변수) 정의부 */
  // 전체 데이터 (fetch 결과)
  const [tdata, setTdata] = useState();

  // 대분류 목록
  const [c1, setC1] = useState();

  // 선택된 대분류
  const [selC1, setSelC1] = useState();

  // 중분류 목록
  const [c2, setC2] = useState();

  // 선택된 중분류
  const [selC2, setSelC2] = useState();

  // 선택된 항목의 상세 정보 (렌더링용 JSX 배열)
  const [info, setInfo] = useState();

  /* 2. 데이터 fetch 함수 정의 */
  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);

    // API 호출
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.data)) // 전체 데이터만 추출
      .catch((err) => console.error(err));
  };

  /* 3. useEffect 훅들 */

  // 컴포넌트 마운트 시 데이터 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  // 전체 데이터가 변경되면 대분류 목록 추출
  useEffect(() => {
    if (!tdata) return;

    // 대분류 목록 중복 제거하여 세팅
    let tm = tdata.map((item) => item["사고유형_대분류"]);
    tm = [...new Set(tm)]; // Set으로 중복 제거

    setC1(tm);
  }, [tdata]);

  // 대분류가 선택되면 중분류 목록 추출
  useEffect(() => {
    if (!tdata || !c1 || !selC1) return;

    // 선택된 대분류에 해당하는 중분류만 추출
    let tm = tdata
      .filter((item) => item["사고유형_대분류"] === selC1)
      .map((item) => item["사고유형_중분류"]);

    setC2(tm);
  }, [selC1]);

  // 중분류가 선택되면 상세 항목 추출 및 렌더링용 데이터 구성
  useEffect(() => {
    if (!selC2) return;

    // 선택된 대분류 + 중분류 항목 하나 찾기
    let tm = tdata.filter(
      (item) =>
        item["사고유형_대분류"] === selC1 && item["사고유형_중분류"] === selC2
    )[0];

    console.log(tm); // 선택된 원시 데이터 디버깅 출력

    // 상세 정보로 보여줄 항목 키 목록
    const infoKey = [
      "사고건수",
      "사망자수",
      "중상자수",
      "경상자수",
      "부상신고자수",
    ];

    // JSX로 변환된 상세 정보 컴포넌트 구성
    tm = infoKey.map((item) => (
      <div key={item}>
        <div className="w-1/2 h-10 flex justify-center items-center bg-lime-600 text-white font-bold">
          {item}
        </div>
        <div className="w-1/2 h-10 flex justify-center items-center border">
          {parseInt(tm[item]).toLocaleString()} {/* 숫자 포맷팅 */}
        </div>
      </div>
    ));

    setInfo(tm);
  }, [selC2]);

  /* 4. 렌더링 */
  return (
    <div
      className="w-full h-full flex flex-col
                    justify-start items-center"
    >
      {/* 대분류 선택 UI 표시 */}
      {c1 && (
        <TrafficNav title="대분류" ctg={c1} sel={selC1} setSel={setSelC1} />
      )}

      {/* 중분류 선택 UI 표시 */}
      {c2 && (
        <TrafficNav title="중분류" ctg={c2} sel={selC2} setSel={setSelC2} />
      )}

      {/* 상세 정보 표시 영역 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  );
}
