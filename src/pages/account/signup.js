import React, { useState } from "react";
import { supabaseClient } from "../../utility/supabaseClient";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    const { user, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Error signing up: ${error.message}`);
    } else if (user) {
      setMessage(`Signed up as ${user?.email}`);
    } else {
      setMessage("Check your email for the verification link");
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
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

        <button type="submit">Sign Up</button>
      </form>
      {message && <div>{message}</div>}
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default SignUp;
