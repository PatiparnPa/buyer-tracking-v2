import TabBar from "./Tabbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Goback from "../assets/goback.png";
import { useState } from "react";
import Heart from "../assets/heart-removebg-preview.png";
import { HeartButton } from "./Heartbutton";
import { useNavigate } from "react-router-dom";


export const SelectMenuFeature = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={handleGoBack}
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </button>
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>ร้านพี่ช้าง</h5>
        <div className="right-elements">
          <div className="elements-container">
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-image-container">
          <img
            src={Logo}
            className="menu-img"
            alt="Menu 1"
            style={{ paddingRight: "5%" }}
          />
        </div>
        <div className="menu-container-details">
          <div className="menu-details-content">
            <div className="menu-text">
              <p style={{fontSize:'22px'}}><b>เมนูตามสั่ง(พิมด้วยตัวเอง)</b></p>
              <p style={{fontSize:'18px', color:'#9FA5AF'}}><b>Custom price</b></p>
            </div>
          </div>
          <div className="menu-form-detail">
            <p style={{ fontWeight:'bold', fontSize:'18px'}}>Note to store</p>
            <input
              type="text"
              placeholder="Message"
              className="menu-input"
            />
            <p style={{ fontSize: "14px" }}>*Enter your note to store here(optional)</p>
            <br></br>
            <div className='menu-amount-option'>
              <button onClick={handleDecrement}>-</button>
              <p>{quantity}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
            <div className="menu-buttons">
              <button className="menu-button">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
