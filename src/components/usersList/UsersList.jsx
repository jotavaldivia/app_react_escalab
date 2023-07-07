// components
import UserListItem from "../userListItem/UserListItem";
// styles
import s from "./index.module.css";
import { useUserContext } from "../hooks/useUserContext";
import { UserFormContext } from "../../context/UserFormContext";

const UsersList = () => {
  const { users } = useUserContext(UserFormContext);
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
              <UserListItem user={user} key={user.id} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
