import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Registration.module.css";

function SignUp({ onSubmit, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username, password);
  }

  return (
    <div className={styles.auth}>
      <h2>Sign Up</h2>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p>Already signed up? <Link to="/signin">Login</Link></p>
    </div>
  );
}

export default SignUp;