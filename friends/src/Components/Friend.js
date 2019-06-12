import React from "react";

const styles = {
  container: {
    border: "1px solid black",
    width: "400px",
    height: "auto",
    margin: "10px auto"
  }
};

const Friend = ({ friend }) => {
  return (
    <div style={styles.container}>
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default Friend;
