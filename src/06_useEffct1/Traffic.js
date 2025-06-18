import { useState, useEffect } from "react";

export default function Traffic() {
  const [tdata, setTdata] = useState();
  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);
  };
  // 컴포넌트 생성시 fetch
  useEffect(() => {
    getFetchData();
  }, []);
  return <div>Traffic</div>;
}
