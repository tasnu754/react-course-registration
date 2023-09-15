import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";

function App() {
  
  return (
    <div className="bg-[#F3F3F3] border-2">
      <div className="max-w-[90%]  mx-auto">
        <Header></Header>
        <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
