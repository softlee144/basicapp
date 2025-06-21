import { RiHomeHeartFill } from "react-icons/ri";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyClock from "./02/MyClock";
import Lotto from './05_lotto/Lotto';
import Traffic from "./06_useEffct1/Traffic";
import MyRefAdd from "./07_useRef/MyRefAdd";
import Gallery from "./08_openapi/Gallery";
import RecoilMain from "./10_recoil/RecoilMain";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full h-screen mx-auto">
        <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
          <p>리액트 기초</p>
          <p>
            <RiHomeHeartFill />
          </p>
        </header>
        <main className="grow w-full flex justify-center items-center overflow-y-auto">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/add" element={<MyRefAdd />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/recoil" element={<RecoilMain />} />
          </Routes>
        </main>
        <footer className="flex justify-center items-center h-20  bg-black text-slate-200">
          devock
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
