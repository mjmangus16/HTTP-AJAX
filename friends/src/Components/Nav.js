import React from "react";

const styles = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    cursor: "pointer",
    width: "100%"
  }
};

const Nav = ({ showForm, showList }) => {
  return (
    <div style={styles.container}>
      <div style={styles.button} onClick={showList}>
        Friends List
      </div>
      <div style={styles.button} onClick={showForm}>
        Add Friend
      </div>
    </div>
  );
};

export default Nav;
