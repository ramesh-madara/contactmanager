import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h5 style={{ color: "#5DA0B5" }} className="display-4">
        404!
      </h5>
      <h4 style={{ color: "#5DA0B5" }}>Page Not Found.</h4>
      <p className="lead">
        Sorry! That page does not exist.
        <Link style={{ color: "#5DA0B5", fontWeight: "bold" }} to="/">
          {" "}
          HOME
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
