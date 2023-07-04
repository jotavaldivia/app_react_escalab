import { PropTypes } from "prop-types";
import s from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Users = ({ users, user, setUsers, editing, setEditing }) => {
  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleEditUser = (id) => {
    setEditing(editing ? false : true);
    console.log("editando usuario", id);
    const userToEdit = users.find((user) => user.id === id);
    console.log(userToEdit);
  };

  return (
    <>
      <li className={s.user}>
        <div className={s.userContainer}>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Nombre:</strong> {user.name}
          </p>
          <p>
            <strong>Edad:</strong> {user.age}
          </p>
        </div>

        <div className={s.buttons}>
          <a
            onClick={() => {
              handleEditUser(user.id);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faUserPen} />
          </a>
          <a
            onClick={() => {
              handleDeleteUser(user.id);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </a>
        </div>
      </li>
    </>
  );
};

Users.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default Users;
