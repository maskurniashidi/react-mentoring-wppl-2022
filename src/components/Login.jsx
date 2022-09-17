import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // Logic tanpa api
    // if (user.username === "123" && user.password === "123") {
    //   localStorage.setItem("token", 123);
    //   navigate("/dashboard");
    // } else {
    //   alert("Login gagal");
    // }

    // logic dengan request api
    const requestBody = { email: user.email, password: user.password };
    axios
      .post(`https://api-fafifu-secondhand.herokuapp.com/v1/auth/login`, requestBody)
      .then((res) => {
        console.log(res);
        alert("login berhasil");
        localStorage.setItem("token", res.data.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("pendaftaran gagal", err);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>Halaman login</h1>
      <div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput} />
        </div>
        <div className="form-field">
          <label htmlFor="passoword">Password</label>
          <input type="password" name="password" id="password" onChange={handleInput} />
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
