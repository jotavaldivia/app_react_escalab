import s from "./index.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../hooks/useUserContext";
import { UserFormContext } from "../../context/UserFormContext";

const Users = (props) => {
  const { user } = props;
  const { dispatch } = useUserContext(UserFormContext);

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
              dispatch({ type: "EDIT_USER", payload: user });
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faUserPen} />
          </a>
          <a
            onClick={() => {
              dispatch({ type: "DELETE_USER", payload: user.id });
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

export default Users;

Users.propTypes = {
  user: PropTypes.object.isRequired,
};
