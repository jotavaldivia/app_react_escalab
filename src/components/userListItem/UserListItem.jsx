import { PropTypes } from "prop-types";
// styles
import s from "./index.module.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Users = ({ user, deleteUser, handleButtonEditUser }) => {
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
            onClick={(e) => {
              handleButtonEditUser(e, user);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faUserPen} />
          </a>
          <a
            onClick={() => {
              deleteUser(user.id);
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
  deleteUser: PropTypes.func.isRequired,
  handleButtonEditUser: PropTypes.func.isRequired,
};

export default Users;
