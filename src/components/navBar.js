import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// props
const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "COVID 19",
  icon: "fas fa-people-arrows",
};

export default Navbar;
