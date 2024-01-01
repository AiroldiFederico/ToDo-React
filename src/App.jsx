import { useState } from "react";
import "./style/App.css";

//components:
import MainComp from "./components/MainComp";

function App() {
  return (
    <>
      <div className=" w-screen h-screen justify-center flex items-center">
        <MainComp></MainComp>
      </div>
    </>
  );
}

export default App;
