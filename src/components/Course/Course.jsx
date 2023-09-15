import PropTypes from "prop-types";
import { FaDollarSign , FaBookOpen } from 'react-icons/fa';

const Course = ({ course , handleAddedCourse}) => {

  return (
    <div className="card w-[312px] h-[410px] bg-base-100 shadow-xl mb-4">

      <figure>
        <img className="w-[280px] h-[144px] mt-6"
          src={course.img}
          alt="Course Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-base">{course.course_name}</h2>
        <p className="texy-base font-normal text-[#1C1B1B99]">{course.course_details}</p>

        <div className="flex justify-between items-center">
           <FaDollarSign></FaDollarSign>
           <p className="text-base font-medium text-[#1C1B1B99]">Price : {course.price}</p>
           <span><FaBookOpen></FaBookOpen></span>
           <p className="ml-4 text-base font-medium text-[#1C1B1B99]">Credit : {course.credit} hr</p>
        </div>
        
        <button onClick={() => handleAddedCourse(course)} className="btn btn-primary mt-4">Select</button>
       
      </div>

    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddedCourse: PropTypes.func.isRequired
};
export default Course;
