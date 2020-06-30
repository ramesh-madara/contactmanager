import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Check for errors!!!

    if (name === "") {
      this.setState({ errors: { name: "name is required!" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required!" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    }
    // dispatch({ type: "ADD_CONTACT" });

    const newContact = {
      // id: uuidv4(),
      name,
      email,
      phone,
    };

    //http Request
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    // dispatch({ type: "ADD_CONTACT", payload: newContact });

    //CLEARING FIELDS POST SUBMISSION
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    //RETURN HOME AFTER SUBMITING THE THE FORM
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 ml-4 mr-4">
              <div className="card-header ">
                <h5>add contact</h5>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="email"
                    name="email"
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
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
