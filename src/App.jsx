import { useState } from "react";

//style:
import "./style/App.css";

//components:
import MainComp from "./components/MainComp";

function App() {
  return (
    <>
      <div className=" w-screen h-screen justify-center flex items-center bg-slate-800">
        <MainComp></MainComp>
      </div>
    </>
  );
}

export default App;
