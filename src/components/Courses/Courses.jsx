import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from "../Course/Course";
import AddedCourse from "../AddedCourse/AddedCourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [addedcourse , setAddedCourse] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddedCourse = (course) =>{
    const isExist = addedcourse.find((item) => item.id===course.id);

    if(isExist){
        toast("You can not select same course twice");
    }
    else{
        const newAdded = [...addedcourse , course];
        setAddedCourse(newAdded);
    }
  }

  return (
    <div className="flex">
      <div className="w-3/4 grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Course key={course.id} course={course} handleAddedCourse={handleAddedCourse} ></Course>
        ))}
      </div>
      <div>
        <AddedCourse addedcourse={addedcourse} ></AddedCourse>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Courses;
