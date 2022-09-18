import React from "react";
import Navbar from "./Navbar";
import "./styles/styles.css";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="main-division">
        <h1>Ini Halaman Landing Page</h1>
        <div className="note">
          Teman-teman hanya bisa masuk ke halaman ini jika belum LOGIN / ter-Autentikasi
        </div>
      </div>
    </div>
  );
}

export default Landing;
