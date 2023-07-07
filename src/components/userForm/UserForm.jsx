import PropTypes from "prop-types";
import { UserFormContext } from "../../context/UserFormContext";
import s from "./index.module.css";
import { useUserContext } from "../hooks/useUserContext";

const UserForm = () => {
  const { user, setUser, isEdit, handleAddUser, handleUpdateUser } =
    useUserContext(UserFormContext);

  const { name, age } = user;

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
