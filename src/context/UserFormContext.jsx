import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { data } from "../../data/data";

export const UserFormContext = createContext();

const initialState = {
  users: data,
  user: {
    id: null,
    name: null,
    age: null,
  },
  isEdit: false,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("aqui", state, action);
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          users: [...state.users, action.payload],
          user: { id: null, name: "", age: "" },
        };
      case "DELETE_USER":
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      case "EDIT_USER":
        return {
          ...state,
          isEdit: true,
          user: action.payload,
        };
      case "UPDATE_USER":
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
          isEdit: false,
          user: { id: null, name: "", age: "" },
        };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <UserFormContext.Provider
      value={{
        users: state.users,
        user: state.user,
        isEdit: state.isEdit,
        dispatch,
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
