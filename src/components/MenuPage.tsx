import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Goback from "../assets/goback.png";
import Cart from "../assets/cart.jpg";
import Logo from "../assets/logo.jpg";
import { useParams } from "react-router-dom";

interface Menu {
  _id: string;
  name: string;
  product_img_url: string;
  product_tag: string;
  price: number;
  store_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const MenuPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuData, setMenuData] = useState<Menu[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const { storeId } = useParams();

  // Access store name from location state
  const storeName = location.state?.storeName || 'Default Store Name';

  useEffect(() => {
    // Fetch menu data for the specific store using storeId
    fetch(`https://order-api-patiparnpa.vercel.app/products/store/${storeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMenuData(data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setError("Failed to fetch menu data. Please try again.");
      });
  }, [storeId]); // Include storeId in the dependency array

  const handleGoBack = () => {
    navigate(-1); // Navigate back
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
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>{storeName}</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div className="store-container">
        <div
          onClick={() => navigate("/menufea1")}
          className="menus-card"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <div className="store-link" style={{ cursor: "pointer" }}>
            <img src={Logo} alt="custom menu"></img>
            <p>เมนูตามสั่ง(พิมพ์ด้วยตัวเอง)</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Custom price</p>
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
        </div>
        {menuData.map((menu) => (
          <div
            key={menu._id}
            onClick={() => navigate(`/menufea2/${menu._id}`)}
            className="menus-card"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <div className="store-link" style={{ cursor: "pointer" }}>
              <img src={menu.product_img_url} alt={menu.name} />
              <p>{menu.name}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          </div>
        ))}
      </div>
    </>
  );
};
