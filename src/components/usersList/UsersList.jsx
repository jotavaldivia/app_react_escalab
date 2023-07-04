import { useState } from "react";
import { PropTypes } from "prop-types";
import UserListItem from "../userListItem/UserListItem";
import UserForm from "../userForm/UserForm";
import s from "./index.module.css";
const UsersList = ({ users, setUsers }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className={s.containerList}>
      <h1 className={s.title}>Lista de usuarios</h1>
      <ul className={s.userList}>
        {users.map((user) => {
          return (
            <>
              <UserListItem
                users={users}
                setUsers={setUsers}
                key={user.id}
                user={user}
                editing={editing}
                setEditing={setEditing}
              />
              {editing && <UserForm />}
            </>
          );
        })}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default UsersList;
