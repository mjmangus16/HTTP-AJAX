import React from "react";

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

const Form = ({ input, submit, name, age, email }) => {
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Friends Name"
        name="name"
        onChange={e => input(e)}
        value={name}
      />

      <input
        style={styles.input}
        placeholder="Friends Age"
        name="age"
        onChange={e => input(e)}
        value={age}
      />

      <input
        style={styles.input}
        placeholder="Friends Email"
        name="email"
        onChange={e => input(e)}
        value={email}
      />

      <button style={styles.input} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
