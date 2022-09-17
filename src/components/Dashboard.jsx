import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <h1>Halaman Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
