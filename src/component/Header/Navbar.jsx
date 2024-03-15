import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <div className="navbar bg-base-100 flex  justify-center">
        <a className="btn btn-ghost text-2xl text-black font-bold">Our Courses</a>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
