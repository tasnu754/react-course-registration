import PropTypes from "prop-types";
import { FaDollarSign , FaBookOpen } from 'react-icons/fa';

const Course = ({ course }) => {
  console.log(course);
  return (
    <div className="card w-[312px] h-[402px] bg-base-100 shadow-xl mb-4">

      <figure>
        <img className="w-[280px] h-[144px] mt-6"
          src={course.img}
          alt="Course Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.course_name}</h2>
        <p>{course.course_details}</p>

        <div className="flex justify-between items-center">
           <FaDollarSign></FaDollarSign>
           <p className="">Price: {course.price}</p>
           <span><FaBookOpen></FaBookOpen></span>
           <p className="ml-4">Credit : {course.credit} hr</p>
        </div>
        
        <button className="btn btn-primary">Select</button>
       
      </div>

    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Course;
