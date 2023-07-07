import s from "./index.module.css";
import { UserForm, UsersList } from "./components";

function App() {
  return (
    <div className={s.containerApp}>
      <UserForm />
      <UsersList />
    </div>
  );
}

export default App;
