import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import FriendsList from "./Components/FriendsList";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(res => {
      this.setState({ friends: res.data });
    });
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default App;
