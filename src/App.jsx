import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="max-w-[90%]  mx-auto border-2 ">
        <Header></Header>
        <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
