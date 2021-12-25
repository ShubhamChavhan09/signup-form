import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // if (
    //   username === "test123" &&
    //   password === "12345" &&
    //   email === "test@gmail.com"
    // ) {
    // }
    navigate("/login");
  };

  return (
    <div>
      <h1> Sign up </h1>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email Address</label>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Signup;
