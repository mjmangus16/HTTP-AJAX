import React, { Component } from "react";
import axios from "axios";

import Friend from "./Friend";

class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(res => {
      console.log(res.data);
      this.setState({ friends: res.data });
    });
  }

  render() {
    const { friends } = this.state;

    return (
      <div>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default FriendsList;
