import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import Redbin from "../assets/redbin.png";
import Cart from "../assets/cart.jpg";
import Logo from "../assets/logo.jpg";

export const FavoriteMenus = () => {
  const navigate = useNavigate();
  const [isManageMode, setIsManageMode] = useState(false);

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleManageClick = () => {
    setIsManageMode(!isManageMode);
  };

  const manageButtonStyles = {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    width: "80px",
    color: isManageMode ? "white" : "#FF3A3A",
  };

  const overlayStyles: React.CSSProperties = {
    backgroundColor: "#505050",
    opacity: 0.8,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  };

  const FavMenus = [
    {
      id: 1,
      name: "กระเพราหมูกรอบไข่ดาว",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 70,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "กระเพราหมูกรอบไข่ดาว 20 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาวยาราไนก้า",
      price: 100,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    // ... your menu data
  ];

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
        <h5 style={{ marginTop: "2%", textAlign: "left", marginLeft: "150px" }}>
          My Favorite Menu
        </h5>
        <div className="right-elements">
          <div className="elements-container">
            <button style={manageButtonStyles} onClick={handleManageClick}>
              {isManageMode ? "Cancel" : "Manage"}
            </button>
          </div>
        </div>
      </div>
      <div className="store-container">
        {FavMenus.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            User does not have favorite menu.
          </p>
        ) : (
          FavMenus.map((menu) => (
            <div
              key={menu.id}
              className="menus-card"
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                position: "relative",
              }}
            >
              {isManageMode ? (
                <button
                  className="store-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle button click logic here
                    console.log("Button clicked");
                  }}
                ></button>
              ) : (
                <div
                  onClick={() => navigate("/menufea2")}
                  className="store-link"
                  style={{ cursor: "pointer" }}
                >
                  <img src={menu.image} alt={menu.name}/>
                  <p>{menu.name}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>{menu.price} บาท</p>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        marginLeft: "5px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Button clicked!");
                      }}
                    >
                      <img
                        src={Cart}
                        alt="Cart"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </button>
                  </div>
                </div>
              )}
              {isManageMode && (
                <div
                  style={overlayStyles}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Overlay clicked");
                  }}
                >
                  <img
                    src={Redbin}
                    alt="Redbin"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "73px",
                      height: "95px",
                    }}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

