import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
function Register() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    const requestBody = { email: user.email, password: user.password, name: user.username };
    axios
      .post(`https://api-fafifu-secondhand.herokuapp.com/v1/auth/register`, requestBody)
      .then((res) => {
        alert("pendaftaran berhasil");
        navigate("/login");
      })
      .catch((err) => {
        alert("pendaftaran gagal");
      });
    // alert(`registrasi berhasil dengan data => email :${user.email}, username: ${user.username}, password: ${user.password} `);
  };

  return (
    <div>
      <Navbar />
      <h1>Register</h1>
      <div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="username" name="username" id="username" onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="passoword">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
      </div>
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Register;
