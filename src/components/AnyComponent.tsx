// AnyComponent.tsx
import { usePopup } from "./PopupContext";
import PopupComponent from "./PopupComponent";
import { useState } from "react";
import React, { useEffect } from "react";
import { useUser } from "./UserContext";
import { jwtDecode } from "jwt-decode";

const AnyComponent: React.FC = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const userData = useUser();

  console.log("User ID:", userData.userId);
  console.log("Basket ID:", userData.basketId);
  console.log("Favorite ID:", userData.favoriteId);

  useEffect(() => {
    // Retrieve access token from local storage (or wherever it's stored)
    const accessToken = localStorage.getItem("accessToken");
    console.log('accesstoken', accessToken);
    if (accessToken) {
      try {
        // Decode the access token
        const decodedToken: { [key: string]: any } = jwtDecode(accessToken);
        // Extract user-related data from the decoded token

        console.log("UserData", decodedToken);
      } catch (error) {
        console.error("Error decoding access token:", error);
      }
    }
  }, []);


  const customContent: JSX.Element = <div>yee</div>;

  return (
    <div>
      <button onClick={() => openPopup(customContent)}>Open Popup</button>
      {isPopupOpen && <PopupComponent onClose={closePopup} />}
    </div>
  );
};

export default AnyComponent;
