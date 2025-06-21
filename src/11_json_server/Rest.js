import { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";

export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const url = "http://localhost:3005/posts";

  const getFetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);

    setTdata(data);
  };

  const jsonPost = async () => {
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요");
      txt1Ref.current.focus();
      return;
    }

    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요");
      txt2Ref.current.focus();
      return;
    }

    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await resp.json();
    console.log(data);

    setTdata([data, ...tdata]);

    txt1Ref.current.value = "";
    txt1Ref.current.focus();
    txt2Ref.current.value = "";
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    console.log(tdata);

    let tm = tdata.map((item) => (
      <tr key={item.id} className="h-10 border-b">
        <td className="text-center">{item.title}</td>
        <td className="text-center">{item.author}</td>

        <td className="text-center">
          <TailButton caption="삭제" bcolor="orange" handleClick={jsonPost} />
        </td>
        <td className="text-center">
          <TailButton caption="수정" bcolor="lime" handleClick={jsonPost} />
        </td>
      </tr>
    ));

    setTags(tm);
  }, [tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 flex items-center bg-slate-100 text-center my-5 p-5 space-x-4">
        <label htmlFor="txt1" className="whitespace-nowrap">
          제목
        </label>
        <input
          id="txt1"
          type="text"
          className="form-input w-1/3"
          ref={txt1Ref}
        />
        <label htmlFor="txt2" className="whitespace-nowrap">
          작성자
        </label>
        <input
          id="txt2"
          type="text"
          className="form-input w-1/4"
          ref={txt2Ref}
        />
        <TailButton caption="입력" bcolor="blue" handleClick={jsonPost} />
      </div>

      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">
              제목
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              작성자
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              삭제
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              편집
            </th>
          </tr>
        </thead>
        <tbody>{tags}</tbody>
      </table>
    </div>
  );
}
