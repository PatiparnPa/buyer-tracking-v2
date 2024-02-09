import { Link } from "react-router-dom";
import Goback from "../assets/goback.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoNext from "../assets/yeet.jpg";

export const MyCart = () => {
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

  const orderData = [
    {
      storeId: "id1",
      storeName: "ร้านพี่ช้าง",
      totalItems: 3,
      totalPrice: 80,
    },
    {
      storeId: "id2",
      storeName: "ร้านพี่เมพ",
      totalItems: 4,
      totalPrice: 50,
    },
    {
      storeId: "id3",
      storeName: "ร้านพี่หมี",
      totalItems: 4,
      totalPrice: 40,
    }
    
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
        <h5 style={{ marginTop: "2%", textAlign: "left", marginLeft: "60px" }}>
          My Cart
        </h5>
        <div className="right-elements">
          <div className="elements-container">
            <button style={manageButtonStyles} onClick={handleManageClick}>
              {isManageMode ? "Cancel" : "Manage"}
            </button>
          </div>
        </div>
      </div>

      {/* Display order items */}
      <div className="order-container">
        {orderData.map((order, index) => (
          <div className="order-item" key={index}>
            {isManageMode && (
              <div>
                {/* Render checkboxes here */}
                <input
                  type="checkbox"
                  style={{
                    marginRight: "20px",
                    width: "20px",
                    height: "20px",
                    alignItems: "center",
                  }}
                />
              </div>
            )}
            <div className="left-content">
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                {order.storeName}
              </div>
              <div style={{ fontSize: "18px" }}>
                Select {order.totalItems} items
              </div>
            </div>
            <div className="right-content">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                {order.totalPrice} Baht
              </div>
              <Link to='/confirmorder' className="link">
                <img
                  src={GoNext}
                  alt="link"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>

      {isManageMode && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <button
            style={{
              background: "#FF3A3A",
              color: "white",
              width: "95%",
              border: "none",
              height: "56px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight:'bold',
              
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};
