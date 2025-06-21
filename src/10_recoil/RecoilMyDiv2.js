import RecoilMyDiv3 from "./RecoilMyDiv3";

// 구조 분해 할당 적용 : { dn1, dn2, dn3 }
export default function RecoilMyDiv2({ dn1, dn2, dn3 }) {
  return (
    <div
      className="flex flex-col p-5 m-10
                    w-3/4 h-3/4 
                    justify-center items-center
                    bg-lime-700 text-white"
    >
      <div className="w-full flex justify-start">
        {/* {`${props.dn1} > ${props.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      {/* <MyDiv3 d1={props.dn1} d2={props.dn2} d3={props.dn3} /> */}
      <RecoilMyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  );
}
