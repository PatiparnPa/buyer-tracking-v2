import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import liff from "@line/liff"; // Import LIFF library

export const Loading = () => {
  const navigate = useNavigate();
  const [userLineData, setUserLineData] = useState({
    userLineId: null,
    userLineName: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userDataString = localStorage.getItem("userLineData");
      console.log("userdatastring", userDataString);
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserLineData(userData);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>loading...</div>
      <div>User ID: {userLineData?.userLineId}</div>
      <div>User Name: {userLineData?.userLineName}</div>
    </div>
  );
};
