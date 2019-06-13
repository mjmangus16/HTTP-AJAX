import React, { Component } from "react";
import axios from "axios";

const styles = {
  container: {
    border: "1px solid black",
    width: "500px",
    height: "auto",
    margin: "10px auto",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    height: 25,
    width: "75%",
    margin: "15px auto"
  }
};

class Form extends Component {
  state = {
    name: "",
    age: "",
    email: ""
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
        .catch(err => console.log(err));
    }
  };

  render() {
    const { name, age, email } = this.state;

    return (
      <div style={styles.container}>
        <input
          style={styles.input}
          placeholder="Friends Name"
          name="name"
          onChange={e => this.inputHandler(e)}
          value={name}
        />

        <input
          style={styles.input}
          placeholder="Friends Age"
          name="age"
          onChange={e => this.inputHandler(e)}
          value={age}
        />

        <input
          style={styles.input}
          placeholder="Friends Email"
          name="email"
          onChange={e => this.inputHandler(e)}
          value={email}
        />

        <button style={styles.input} onClick={this.addFriend}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
