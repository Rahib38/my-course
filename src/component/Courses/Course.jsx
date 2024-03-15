import PropTypes from "prop-types";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <div className="container">
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-4">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">name</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <p>
                <HiCurrencyDollar />
              </p>
              Price {}
            </div>
            <div className="flex items-center">
              <p>
                <IoBookOutline />
              </p>
              <p>Credit{}</p>
            </div>
          </div>
          <div className="card-actions w-full">
            <button className="btn btn-primary w-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {};

export default Course;
