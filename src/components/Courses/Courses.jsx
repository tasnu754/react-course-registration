import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h3>Courses number : {courses.length}</h3>
      <div className="w-3/4 grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default courses;
