import PropTypes from "prop-types";
import { UserFormContext } from "../../context/UserFormContext";
import s from "./index.module.css";
import { useUserContext } from "../../hooks/useUserContext";

const UserForm = () => {
  const { dispatch, isEdit, user } = useUserContext(UserFormContext);
  const { name, age } = user;

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
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);
    const newUser = {
      id: user.id,
      name: user.name,
      age: user.age,
    };
    dispatch({ type: "UPDATE_USER", payload: newUser });
  };

  return (
    <div className={s.containerUserForm}>
      <h1>Formulario de registro</h1>
      <form
        onSubmit={(e) => {
          if (isEdit) {
            console.log("estas editando un usuario");
            handleUpdateUser(e, user);
          } else {
            handleAddUser(e, user);
          }
        }}
      >
        <div className={s.dataUser}>
          <label>Nombre :</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            name={name}
            onChange={(e) => {
              dispatch({
                type: "SET_USER",
                payload: { ...user, name: e.target.value },
              });
            }}
          />
          <label>Edad :</label>
          <input
            type="number"
            placeholder="Ingresa tu edad"
            value={age}
            name={age}
            onChange={(e) => {
              dispatch({
                type: "SET_USER",
                payload: { ...user, age: e.target.value },
              });
            }}
          />
        </div>
        <div className={s.buttonContainer}>
          {isEdit ? (
            <button className={s.addUser}>Editar Usuario</button>
          ) : (
            <button className={s.addUser}>Agregar Nuevo Usuario</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  addUser: PropTypes.func,
  handleUpdateUser: PropTypes.func,
};
