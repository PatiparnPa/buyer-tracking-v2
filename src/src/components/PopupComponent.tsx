// PopupComponent.tsx

import React, { useContext } from "react";
import "./PopupComponent.css";
import { PopupContext } from "./PopupContext";
import Pot from "../assets/pot-removebg-preview.png";

interface PopupProps {
  onClose: () => void;
}

const PopupComponent: React.FC<PopupProps> = ({ onClose }) => {
  const contextValue = useContext(PopupContext);

  if (!contextValue) {
    // Handle the case where the context value is undefined
    return null; // or display some default content
  }

  const { popupContent } = contextValue;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {popupContent || getDefaultContent()}
        <button className="close-button" onClick={onClose}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

const getDefaultContent = () => (
  <div>
    <img src={Pot} style={{ width: "170px" }}></img>
    <p style={{fontSize:'51px', fontWeight:'bolder'}}>A51</p>
    <p style={{fontWeight:'600', fontSize:'18px'}}>Your Order is done!!</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight:'400', fontSize:'16px', color:'#000000' }}>
      <p style={{ margin: 0 }}>ร้านพี่ช้าง</p>
      <p>100 Bath</p>
    </div>
    <br></br>
    <button
      className="to-order-page-button"
    >
      Go to order Page
    </button>
  </div>
);

export default PopupComponent;
