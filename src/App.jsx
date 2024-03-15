import { useEffect, useState } from "react";
import "./App.css";
import Courses from "./component/Courses/Courses";
import Navbar from "./component/Header/Navbar";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-col md:flex-row lg:flex-row">
        <Courses courses={courses}></Courses>

        <div className=" w-full ml-4 h-28 border bg-red-600">
          <h1>world</h1>
        </div>
      </div>
    </>
  );
}

export default App;
