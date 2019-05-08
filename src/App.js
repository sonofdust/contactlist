import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
//import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          {" "}
          <Contact
            name="Nicholas Roman"
            email="Nick@gmail.com"
            phone="888-999-9999"
          />
        </div>
      </div>
    );
  }
}

export default App;
