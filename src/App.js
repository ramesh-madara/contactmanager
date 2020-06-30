import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import { Provider } from "./context";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="contact manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContact}
                ></Route>

                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
