import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./styles/styles.css";

function Register() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    numberPhone: "",
    type: "",
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
      .post(`http://localhost:8000/api/auth/signup`, requestBody)
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
      <div className="main-division">
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
            <label htmlFor="numberPhone">Number Phone</label>
            <input type="username" name="numberPhone" id="numberPhone" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="username">Type Akun</label>
            <input type="username" name="type" id="type" onChange={handleChange} placeholder="ketik bebas, terserah" />
          </div>
          <div className="form-field">
            <label htmlFor="passoword">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>
        </div>
        <button onClick={handleClick}>Register</button>
        <div className="note">Note: Silahkan buat akun dengan mengisi form diatas</div>
      </div>
    </div>
  );
}

export default Register;
