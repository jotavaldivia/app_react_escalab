import s from "./index.module.css";
import UserForm from "./components/userForm/UserForm";
import UsersList from "./components/usersList/UsersList";

import { useState } from "react";
import { data } from "../data/data";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className={s.containerApp}>
      <UserForm users={users} setUsers={setUsers} />
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
