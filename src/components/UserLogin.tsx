import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import liff from "@line/liff"; // Import LIFF library

export const UserLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize LIFF and check if the user is logged in
    async function initializeLIFF() {
      await liff.init({ liffId: "2000210581-wLmA5Enp" }); // Replace with your LIFF ID
      if (liff.isLoggedIn()) {
        // User is already logged in, fetch user data and navigate to the desired page
        const profile = await liff.getProfile();
        const userLineData = {
          userLineId: profile.userId,
        };
        localStorage.setItem("userLineData", JSON.stringify(userLineData));
        navigate('/load'); // Redirect to the desired page after login
      }
    }
    initializeLIFF();
  }, [navigate]);

  const handleLogin = () => {
    // Open the LINE Login window
    liff.login();
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
