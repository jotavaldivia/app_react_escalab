import { useState } from "react";
import { PropTypes } from "prop-types";
import s from "./index.module.css";

const UserForm = ({ users, setUsers }) => {
  const [user, setUser] = useState({
    name: null,
    age: null,
  });
  const { name, age } = user;

  const handleAddUser = (e) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(name, age);
    e.preventDefault();
    const newUser = {
      id: id,
      name: name,
      age: age,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className={s.containerUserForm}>
      <h1>Formulario de registro</h1>
      <form onSubmit={handleAddUser}>
        <div className={s.dataUser}>
          <label>Nombre :</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          <label>Edad :</label>
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={age}
            onChange={(e) => {
              setUser({ ...user, age: e.target.value });
            }}
          />
        </div>
        <div className={s.buttonContainer}>
          <button className={s.addUser}>Agregar Nuevo Usuario</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

UserForm.prototype = {
  handleAddUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
};
