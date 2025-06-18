import { RiHomeHeartFill } from "react-icons/ri";
import MyList from "./04/MyList";
import "./App.css";
import Lotto from "./05_lotto/Lotto";

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
        <Lotto />
      </main>
      <footer className="flex justify-center items-center h-20  bg-black text-slate-200">
        devock
      </footer>
    </div>
  );
}

export default App;
