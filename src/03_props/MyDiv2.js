import MyDiv3 from "./MyDiv3";

export default function MyDiv2(props) {
  return (
    <div
      className="flex flex-col p-5 m-10
                    w-3/4 h-3/4 
                    justify-center items-center
                    bg-lime-700 text-white"
    >
      <div className="w-full flex justify-start">{`${props.dn1} > ${props.dn2}`}</div>
      <MyDiv3 d1={props.dn1} d2={props.dn2} d3={props.dn3} />
    </div>
  );
}
