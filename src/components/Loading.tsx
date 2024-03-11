import React, { useState, useEffect } from "react";

export const Loading = () => {
  const [userLineId, setUserLineId] = useState(null);

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("userLineData");
    
    // Parse the userData JSON string to extract userId
    if (userDataString) {
      const userLineData = JSON.parse(userDataString);
      setUserLineId(userLineData.userLineId);
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>loading...</div>
      <div>User ID: {userLineId}</div>
    </div>
  );
};
