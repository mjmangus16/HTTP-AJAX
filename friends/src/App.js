import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Nav from "./Components/Nav";
import FriendsList from "./Components/FriendsList";
import Form from "./Components/Form";

class App extends Component {
  state = {
    friends: [],
    showForm: false,
    showList: true,
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(res => {
      console.log(res.data);
      this.setState({ friends: res.data });
    });
  }

  showFormHandler = () => {
    this.setState({ showForm: true, showList: false });
  };

  showListHandler = () => {
    this.setState({ showForm: false, showList: true });
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = () => {
    const friend = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    };

    if (friend.name !== "" && friend.age !== "" && friend.email !== "") {
      axios
        .post("http://localhost:5000/friends", friend)
        .then(() => {
          axios
            .get("http://localhost:5000/friends")
            .then(res => {
              console.log(res.data);
              this.setState({
                friends: res.data,
                name: "",
                age: "",
                email: ""
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { friends, showForm, name, age, email } = this.state;
    return (
      <div className="App">
        <Nav showForm={this.showFormHandler} showList={this.showListHandler} />
        {showForm ? (
          <Form
            input={this.inputHandler}
            submit={this.addFriend}
            name={name}
            age={age}
            email={email}
          />
        ) : (
          <FriendsList friends={friends} />
        )}
      </div>
    );
  }
}

export default App;
