import PropTypes from "prop-types";

const AddedCourse = ({addedcourse}) => {
    let num = 0;
    return (
      
        <div className="card w-[312px] h-[410px] bg-base-100 shadow-xl p-6">
            <h2 className="my-4 text-lg font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h2>
            <hr />
            <h2 className="my-4 text-xl font-bold">Course Name</h2>
            <ol className="mb-4"> {addedcourse.length}
                {
                    addedcourse.map((item , idx) => <li key={idx}>{++num } {item.course_name}</li>)
                }
            </ol>

            <hr />
            <p className="my-4 text-base font-medium  text-gray-600  ">Total Credit Hour : 13</p>

        </div>
    );
};

AddedCourse.propTypes = {
    addedcourse: PropTypes.array.isRequired
  };

export default AddedCourse;