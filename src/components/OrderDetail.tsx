import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import { Link } from "react-router-dom";

export const OrderDetail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleClick = () => {
    navigate("/slip");
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
        { menuId: "m1", menuName: "กระเพรา", quantity: "2", price: 50 },
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
      <div className="custom-heading">
        Status: {OrderDataDetail[0].orderStatus}
      </div>
      <div className="order-summary-queue">
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          Your queue is
        </div>
        <div style={{ fontSize: "51px", fontWeight: "bold" }}>
          {OrderDataDetail[0].orderQueue}
        </div>
        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#9FA5AF" }}>
          4 queue left
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
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <button onClick={handleClick} className="button-overlay">
          Cancel Order
        </button>
      </div>
    </>
  );
};
