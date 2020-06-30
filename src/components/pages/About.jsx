import React from "react";

const About = (props) => {
  return (
    <div>
      <h1 className="display-4 ">About Contact Manager</h1>
      <h4 className="lead">A simple app to manage your contacts!</h4>
      <p className="text-secondary">version 1.0.0</p>
      <br />
      <p>
        Made with the help of{" "}
        <a
          style={{ color: "#5DA0B5" }}
          href="https://twitter.com/traversymedia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_"
        >
          Brad Traversy
        </a>{" "}
        /June 2020
      </p>
    </div>
  );
};

export default About;
