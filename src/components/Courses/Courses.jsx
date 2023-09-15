import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from "../Course/Course";
import AddedCourse from "../AddedCourse/AddedCourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [addedcourse , setAddedCourse] = useState([]);
  const [remaining , setRemaining] = useState(20);
   const [credit , setCredit] = useState(0);

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
        let newCredit = credit + course.credit;
        let newRemainig = remaining - course.credit;
        if(newCredit <= 20 || newRemainig >= 0){
            setCredit(newCredit);
            setRemaining(newRemainig);

            const newAdded = [...addedcourse , course];
            setAddedCourse(newAdded);
        }
        else{
            toast("Credit exceds");
        }
        
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
        <AddedCourse addedcourse={addedcourse} credit={credit} remaining={remaining} ></AddedCourse>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Courses;
