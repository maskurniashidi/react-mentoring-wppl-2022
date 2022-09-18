import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
import "./styles/styles.css";

function Dashboard() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="main-division">
        <h1>Halaman Dashboard</h1>
        <div className="note">
          Teman-teman hanya bisa melihat tulisan ini jika sudah LOGIN / ter-Autentikasi
        </div>
        <button onClick={handleLogout}>Logout</button>
        <Posts />
      </div>
    </>
  );
}

export default Dashboard;
