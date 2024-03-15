import PropTypes from "prop-types";
import Course from "./Course";

const Courses = ({ courses }) => {
  // console.log(courses);
  return (
    <div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {
          courses.map(() => {
          <Course courses={courses}> </Course>;
          })
        }
      </div>
    </div>
  );
};

Courses.propTypes = {
  Courses: PropTypes.array,
};

export default Courses;
