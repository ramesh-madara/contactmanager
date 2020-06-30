import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h3 className=" mb-3 ml-4 mr-4 pt-4">
                <span style={{ color: "#5DA0B5" }}>contact</span>list
              </h3>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
    //DESTRUCTURING
  }
}

export default Contacts;
