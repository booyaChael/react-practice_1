import classes from "./AddUserForm.module.css";
import Card from "../UI/Card";
const AddUserForm = () => {
  return (
    <Card>
      <form className={classes.input}>
        <label htmlFor={"username"}>Username</label>
        <input id="username" type="text" />
        <label htmlFor={"age"}>Age</label>
        <input id="age" type="number" />
      </form>
    </Card>
  );
};

export default AddUserForm;
