import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Nav from "./Components/Nav";
import FriendsList from "./Components/FriendsList";
import Form from "./Components/Form";

class App extends Component {
  state = {
    showForm: false,
    showList: true
  };

  showFormHandler = () => {
    this.setState({ showForm: true, showList: false });
  };

  showListHandler = () => {
    this.setState({ showForm: false, showList: true });
  };

  render() {
    const { showForm, name, age, email } = this.state;
    return (
      <div className="App">
        <Nav showForm={this.showFormHandler} showList={this.showListHandler} />
        {showForm ? <Form /> : <FriendsList />}
      </div>
    );
  }
}

export default App;
