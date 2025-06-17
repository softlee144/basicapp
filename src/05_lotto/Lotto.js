import TailButton from "../UI/TailButton";

export default function Lotto() {
  const handleOK = () => {};

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>ball</div>
      <div>
        <TailButton
          caption="로또번호생성"
          bcolor="orange"
          handleClick={handleOK}
        />
      </div>
    </div>
  );
}
