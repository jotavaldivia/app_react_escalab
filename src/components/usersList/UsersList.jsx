import { PropTypes } from "prop-types";
import UserListItem from "../userListItem/UserListItem";
import s from "./index.module.css";
const UsersList = (prop) => {
  const { users, deleteUser, updateUser } = prop;
  return (
    <div className={s.containerList}>
      {users.length === 0 ? (
        <p className={s.empty}>No hay usuarios para mostrar :c</p>
      ) : (
        <h1 className={s.title}>Lista de usuarios</h1>
      )}

      <ul className={s.userList}>
        {users.map((user) => {
          return (
            <>
              <UserListItem
                key={user.id}
                deleteUser={deleteUser}
                updateUser={updateUser}
                user={user}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default UsersList;
