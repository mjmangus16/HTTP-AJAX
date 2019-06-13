import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import FriendsList from "./Components/FriendsList";
import Form from "./Components/Form";

class App extends Component {
  state = {
    friends: [],
    active: null
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(res => {
      this.setState({ friends: res.data });
    });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  setUpdateForm = item => {
    this.setState({
      active: item
    });
    this.props.history.push("/friendForm");
  };

  editFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data, active: null });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { friends, active } = this.state;
    return (
      <div className="App">
        <Nav />

        <Route
          path="/friendForm"
          render={props => (
            <Form
              {...props}
              addFriend={this.addFriend}
              editFriend={this.editFriend}
              active={active}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={friends}
              deleteFriend={this.deleteFriend}
              setForm={this.setUpdateForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
