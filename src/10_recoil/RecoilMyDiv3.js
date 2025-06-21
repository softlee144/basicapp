import TailButton from "./../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMyDiv3({ d1, d2, d3 }) {
  const [n, setN] = useRecoilState(AtomN);

  const handleUp = () => {
    setN(n + 1);
  };
  const handleDown = () => {
    setN(n-1);
  };

  return (
    <div
      className="flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    bg-lime-500 text-white"
    >
      {`${d1} > ${d2} > ${d3}`}
      <div>
        <TailButton caption="증가" bcolor="blue" handleClick={handleUp} />
        <TailButton caption="감소" bcolor="blue" handleClick={handleDown} />
      </div>
    </div>
  );
}
