import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/Action";

const Signup = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const handleSignup = async (userdata) => {
    let user = await axios.post("http://localhost:8090/user", userdata);
    console.log(user.data);
    dispatch(signup(user.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
    };
    handleSignup(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
