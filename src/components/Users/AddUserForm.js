import classes from "./AddUserForm.module.css";

const AddUserForm = () => {
  return (
    <>
      <form className={classes.input}>
        <label htmlFor={"username"}>Username</label>
        <input id="username" type="text" />
        <label htmlFor={"age"}>Age</label>
        <input id="age" type="number" />
      </form>
    </>
  );
};

export default AddUserForm;
