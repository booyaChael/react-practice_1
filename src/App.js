import AddUserForm from "./components/Users/AddUserForm";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, uAge) => {
    console.log(uName);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUserForm onAddUser={addUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
