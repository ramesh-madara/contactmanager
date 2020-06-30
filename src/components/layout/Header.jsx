import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav
      style={{ backgroundColor: "#5DA0B5" }}
      className="navbar navbar-dark navbar-expand-sm justify-content-between mb-3 py-0"
    >
      <div className="container">
        <Link
          // style={{ color: "#00d8d6" }}
          to="/"
          className="navbar-brand"
        >
          {branding}
        </Link>

        <div>
          <ul className="nav  navbar-nav nav-expand-sm mr-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                {"home <"}
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact/add" className="nav-link ">
                add +
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link ">
                about ?
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/test" className="nav-link ">
                #
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "MyApp!",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
