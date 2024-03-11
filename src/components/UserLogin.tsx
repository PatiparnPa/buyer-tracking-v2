import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import liff from "@line/liff"; // Import LIFF library

export const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await liff.init({ liffId: "2000210581-wLmA5Enp" }); // Replace with your LIFF ID
      await liff.login();
    } catch (error) {
      console.error("Error logging in with LINE:", error);
    }
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <br></br>
      <div style={{ textAlign: "center", marginBottom: "40%" }}>
        <h5 style={{ fontWeight: "bold" }}>Welcome</h5>
        <p>Please Login with Line before start</p>
      </div>
      <button onClick={handleLogin} className="login-button">
        Login with LINE
      </button>
    </div>
  );
};
