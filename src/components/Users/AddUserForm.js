import classes from "./AddUserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUserForm = () => {
  return (
    <Card>
      <form className={classes.input}>
        <label htmlFor={"username"}>Username</label>
        <input id="username" type="text" />
        <label htmlFor={"age"}>Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
