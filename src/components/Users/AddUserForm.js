import classes from "./AddUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
const AddUserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form className={classes.input} onSubmit={handleSubmit}>
        <label htmlFor={"username"}>Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor={"age"}>Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
