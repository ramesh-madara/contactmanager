import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  // state = {
  //   name: "",
  //   email: "",
  //   phone: "",
  // };
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "france baker",
    email: "fbaker@gmail.com",
    phone: "777-777-7777",
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 ml-4 mr-4">
              <div className="card-header ">add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control"
                      placeholder="enter name"
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control"
                      placeholder="enter email"
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control"
                      placeholder="enter phone"
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
