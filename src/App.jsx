import PropTypes from "prop-types";
import s from "./index.module.css";
import UserForm from "./components/userForm/UserForm";
import UsersList from "./components/usersList/UsersList";

import { useState } from "react";
import { data } from "../data/data";

function App() {
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState({
    id: null,
    name: null,
    age: null,
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleAddUser = (e, user) => {
    e.preventDefault();
    if (!user.name || !user.age) return alert("Por favor complete los campos");
    const { name, age } = user;
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(name, age);
    const newUser = {
      id: id,
      name: name,
      age: age,
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleEditUser = (e, _user) => {
    const { id, name, age } = _user;
    e.preventDefault();
    setIsEdit(true);
    console.log("editando usuario", id);
    setUser({ id: id, name: name, age: age });
    // const userToEdit = users.find((user) => user.id === id);

    // console.log(userToEdit);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);
    const newUser = {
      id: user.id,
      name: user.name,
      age: user.age,
    };
    const newUsers = users.map((user) => {
      if (user.id === newUser.id) {
        return newUser;
      } else {
        return user;
      }
    });
    setUsers(newUsers);
    setIsEdit(false);
    setUser({ name: "", age: "" });
  };

  return (
    <div className={s.containerApp}>
      <UserForm
        user={user}
        setUser={setUser}
        addUser={handleAddUser}
        isEdit={isEdit}
        handleUpdateUser={handleUpdateUser}
      />
      <UsersList
        users={users}
        deleteUser={handleDeleteUser}
        updateUser={handleEditUser}
      />
    </div>
  );
}

export default App;

App.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  isEdit: PropTypes.bool,
  addUser: PropTypes.func,
  deleteUser: PropTypes.func,
  updateUser: PropTypes.func,
};
