import { useState, createContext } from "react";
import PropTypes from "prop-types";

import { data } from "../../data/data";

export const UserFormContext = createContext();

const UserProvider = ({ children }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [users, setUsers] = useState(data);

  const [user, setUser] = useState({
    id: null,
    name: null,
    age: null,
  });

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

  const handleButtonEditUser = (e, _user) => {
    const { id, name, age } = _user;
    e.preventDefault();
    setIsEdit(true);
    console.log("editando usuario", id);
    setUser({ id: id, name: name, age: age });
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
    <UserFormContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        isEdit,
        setIsEdit,
        handleAddUser,
        handleDeleteUser,
        handleButtonEditUser,
        handleUpdateUser,
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
