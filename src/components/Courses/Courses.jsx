import { useEffect } from "react";
import { useState } from "react";
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
    const newAdded = [...addedcourse , course];
    setAddedCourse(newAdded);
    // console.log("Added");
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
      </div>
    </div>
  );
};

export default Courses;
