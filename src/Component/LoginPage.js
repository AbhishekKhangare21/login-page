import axios from "axios";
import { useState } from "react";

function LoginPage({ setComponent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [blocked, setBlocked] = useState(0);

  const data = { username, password, blocked };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
        setComponent(false);
      })
      .catch((error) => {
        console.log(error);
        event.target.reset();
      });
  };

  return (
    <div className="login-form">
      <h1>Physioai</h1>
      <h2>Welcome Back!</h2>
      <form onSubmit={submitHandler}>
        <label>* Username</label>

        <input
          type="text"
          name="u ser"
          placeholder="UserName"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>* Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Forgot Password?</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
