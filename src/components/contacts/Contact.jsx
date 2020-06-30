import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onClickDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    //DESTRUCTURING
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 ml-4 mr-4 pb-1 ">
              <h4 style={{ color: "#5DA0B5" }}>
                {name}

                {/*Toggle function affects the DOM.contactDetails.toggleSwitchText Here */}

                {showContactInfo ? (
                  <span
                    onClick={() =>
                      this.setState({ showContactInfo: !showContactInfo })
                    }
                    className="badge badge-pill badge-warning badge-sm m-3 "
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      this.setState({ showContactInfo: !showContactInfo })
                    }
                    className="badge badge-pill badge-warning badge-sm m-3 "
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                )}

                {/* Delete CONTACT */}
                <span
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                  className="badge badge-pill badge-danger badge-sm m-3"
                  style={{ cursor: "pointer", float: "right" }}
                >
                  delete
                </span>

                <Link to={`contact/edit/${id}`}>
                  <span
                    className="badge badge-pill badge-sm m-3"
                    style={{ cursor: "pointer", float: "right", backgroundColor: "#5DA0B5",
                      color: "white", }}
                  >
                    edit
                  </span>
                </Link>
              </h4>

              {/*Toggle function affects the DOM.contactDetails Here */}
              {showContactInfo ? (
                <ul style={{ color: "#666" }} className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
