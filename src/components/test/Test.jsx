import React, { Component } from "react";
class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 style={{ color: "#5DA0B5" }}>Test Component</h1>
        <h5 style={{ color: "#5DA0B5" }}>{title.toUpperCase()}</h5>
        <p className="text-dark">{body}</p>
      </div>
    );
  }
}

export default Test;
