import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import { HeartButton } from "./Heartbutton";
import { useParams } from "react-router-dom";

export const SelectMenuFeature2 = () => {
  const navigate = useNavigate();
  const { menuId } = useParams();
  
  const [menuData, setMenuData] = useState({
    _id: "",
    name: "",
    product_img_url: "",
    product_tag: "",
    price: 0,
    store_id: "",
    status: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://order-api-patiparnpa.vercel.app/products/${menuId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        // Handle the error as needed, e.g., redirect to an error page
      }
    };

    fetchData();
  }, []);

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
        <div className="right-elements">
          <div className="elements-container">
            <HeartButton></HeartButton>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-image-container">
          <img
            src={menuData.product_img_url}
            className="menu-img"
            alt="Menu Image"
          />
        </div>
        <div className="menu-container-details">
          <div className="menu-details-content">
            <div className="menu-text">
              <p style={{ fontSize: '22px' }}><b>{menuData.name}</b></p>
              <p style={{ fontSize: '18px' }}><b>{menuData.price} Bath</b></p>
            </div>
          </div>
          <div className="menu-form-detail">
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Note to store</p>
            <input
              type="text"
              id="noteToStore"  // Add an id attribute
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
