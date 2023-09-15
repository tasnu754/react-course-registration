import PropTypes from "prop-types";

const AddedCourse = ({addedcourse , credit , remaining}) => {
    let num = 0;
    return (
      
        <div className="card w-[312px]  bg-base-100 shadow-xl p-6">
            <h2 className="my-4 text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remaining} hr</h2>
            <hr />
            <h2 className="my-4 text-xl font-bold">Course Name</h2>
            <ol className="mb-4">
                {
                    addedcourse.map((item , idx) => <li className="text-base font-normal text-[#1C1B1B99] " key={idx}>{++num }. {item.course_name}</li>)
                }
            </ol>

            <hr />
            <p className="my-4 text-base font-semibold   text-[#1C1B1BCC]  ">Total Credit Hour : {credit}</p>

        </div>
    );
};

AddedCourse.propTypes = {
    addedcourse: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
  };

export default AddedCourse;