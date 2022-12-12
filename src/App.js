import LoginPage from "./Component/LoginPage";
import "./App.css";
import { useState } from "react";
import UserDetail from "./Component/UserDetail";

const App = () => {
  const [component, setComponent] = useState(true);
  return (
    <div className="App">
      {component === true ? (
        <LoginPage setComponent={setComponent} />
      ) : (
        <UserDetail />
      )}
    </div>
  );
};

export default App;
