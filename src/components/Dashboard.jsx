import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
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
      <Posts />
    </div>
  );
}

export default Dashboard;
