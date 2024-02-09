import React, { useState, ChangeEvent } from "react";
import Goback from "../assets/goback.png";
import { useNavigate } from "react-router-dom";

const PaymentMethodSection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("payAtStore");

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <div
        className="my-order-detail-box"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        <label>
          <input
            type="radio"
            value="payAtStore"
            checked={selectedMethod === "payAtStore"}
            onChange={handleMethodChange}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Pay at the Store
        </label>
      </div>
      <div
        className="my-order-detail-box"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        <label>
          <input
            type="radio"
            value="scanQRCode"
            checked={selectedMethod === "scanQRCode"}
            onChange={handleMethodChange}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Scan QR Code
        </label>
      </div>
    </>
  );
};

export const ConfirmOrder: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const OrderDataDetail = [
    {
      orderQueue: "A24",
      orderStatus: "Wait for cooking",
      menus: [
        { menuId: "m1", menuName: "กระเพรา", quantity: "2", price: 50 },
        {
          menuId: "m2",
          menuName: "ผัดกะเพราหมูกรอบพิเศษ ใส่ไข่ลวก",
          quantity: "1",
          price: 50,
        },
      ],
    },
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
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>ร้านพี่ช้าง</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div className="custom-heading">Order Summary</div>
      {OrderDataDetail[0].menus.map((menu, index) => (
        <div className="my-order-detail-box" key={index}>
          <div
            className="left-content"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "-55%",
            }}
          >
            {menu.quantity}x
          </div>
          <div className="center-content">
            <div className="my-order-shop">{menu.menuName}</div>
            <div className="my-order-date">Edit</div>
          </div>
          <div
            className="right-content"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div
              className="my-order-price"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {menu.price} Bath
            </div>
          </div>
        </div>
      ))}
      <div className="custom-heading" style={{ paddingTop: "15px" }}>
        วิธีการชำระเงิน
      </div>
      <PaymentMethodSection />
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bolder",
          backgroundColor: "#ffffff", // Optional background color
        }}
      >
        <div style={{ color: "#000000" }}>Total</div>
        <div style={{ color: "#000000" }}>150 Bath</div>
      </div>
      <div style={{ textAlign: "center", position:'fixed', bottom:'0', width:'100%', marginBottom:'5px' }}>
        <button
          style={{
            backgroundColor: "#2357A5",
            border: "none",
            width: "95%",
            color: "#FFFFFF",
            height: "56px",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
