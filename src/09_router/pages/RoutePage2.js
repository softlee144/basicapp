import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  const fruits = ["사과", "바나나", "수박"];

  const loc = useLocation();
  //   console.log("useLocation pathname : ", loc.pathname);
  //   console.log("useLocation search : ", loc.search);

  const [sParams] = useSearchParams();
  //   console.log("useSearchParams : ", sParams);

  const qlist = [...sParams];
  console.log(qlist);
  const list = qlist.map((item) => (
    <li key={item[0]}>
      {item[1]} : {fruits.includes(item[1]) ? "과일" : "과일아님"}
    </li>
  ));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">RoutePage2</h1>
      <div className="w-full flex flex-col justify-start items-center text-xl m-2 p-2">
        <ul>{list}</ul>
      </div>
    </div>
  );
}
