import React from "react";
import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  return (
    <div
      className="flex flex-col p-5 
                    justify-center items-center
                    w-2/3 h-2/3 text-2xl
                    bg-lime-900 text-white"
    >
      <div className="w-full h-10 flex justify-start items-center">myDiv1</div>
      <MyDiv2 />
    </div>
  );
}
