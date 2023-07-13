import React, { useState } from "react";
import { supabaseClient } from "../../utility/supabaseClient";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const { user, error } = await supabaseClient.auth.signIn({
      email,
      password,
    });

    if (error) {
      setMessage(`Error logging in: ${error.message}`);
    } else if (user) {
      setMessage(`Logged in as ${user?.email}`);
    } else {
      setMessage("Unexpected error");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      {message && <div>{message}</div>}
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Login;
