import { RiHomeHeartFill } from "react-icons/ri";
// import MyClock from "./02/MyClock";
// import "./App.css";
// import Traffic from "./06_useEffct1/Traffic";
// import MyRef from "./07_useRef/MyRef";
// import MyRefAdd from "./07_useRef/MyRefAdd";
import Gallery from "./08_openapi/Gallery";

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
        <p>리액트 기초</p>
        <p>
          <RiHomeHeartFill />
        </p>
      </header>
      <main className="grow w-full flex justify-center items-center overflow-y-auto">
        <Gallery />
      </main>
      <footer className="flex justify-center items-center h-20  bg-black text-slate-200">
        devock
      </footer>
    </div>
  );
}

export default App;
