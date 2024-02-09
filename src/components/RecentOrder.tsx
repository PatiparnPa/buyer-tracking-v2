import GoNext from "../assets/yeet.jpg";
import { Link } from "react-router-dom";

export const RecentOrder = () => {
  const OrderData = [
    {
      orderQueue: "A24",
      storeId: "store1",
      storeName: "ร้านพี่ช้าง",
      OrderDate: "13 October 2023, 20:16",
      OrderPrice: 30,
      OrderStatus: "OnProcess",
    },
    {
      orderQueue: "A25",
      storeId: "store2",
      storeName: "ร้านพี่เมพ",
      OrderDate: "13 October 2023, 20:16",
      OrderPrice: 50,
      OrderStatus: "OnProcess",
    },
    {
      orderQueue: "A26",
      storeId: "store3",
      storeName: "ร้านพี่หมี",
      OrderDate: "13 October 2023, 20:16",
      OrderPrice: 500,
      OrderStatus: "Done",
    },
    {
      orderQueue: "A27",
      storeId: "store3",
      storeName: "ร้านพี่เห็ด",
      OrderDate: "13 October 2023, 20:16",
      OrderPrice: 90,
      OrderStatus: "Done",
    },
  ];

  // Separate orders based on OrderStatus
  const onProcessOrders = OrderData.filter(
    (order) => order.OrderStatus === "OnProcess"
  );
  const recentOrders = OrderData.filter(
    (order) => order.OrderStatus !== "OnProcess"
  );

  return (
    <>
      <div className="custom-heading">On Process</div>
      {onProcessOrders.map((order, index) => (
        <div key={index} className="my-order-detail-box">
          <div
            className="left-content"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "-40%",
            }}
          >
            {order.orderQueue}
          </div>
          <div className="center-content">
            <div className="my-order-shop">{order.storeName}</div>
            <div className="my-order-date">{order.OrderDate}</div>
          </div>
          <div
            className="right-content"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div
              className="my-order-price"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {order.OrderPrice} Bath
            </div>
            <Link to="/orderdetail" className="link">
              <img
                src={GoNext}
                alt="link"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
          </div>
        </div>
      ))}

      <div className="custom-heading" style={{ paddingTop: "12px" }}>
        Recent
      </div>
      {recentOrders.map((order, index) => (
        <div key={index} className="my-order-detail-box">
          {/* Render recent orders similarly */}
          <div
            className="left-content"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "-40%",
            }}
          >
            {order.orderQueue}
          </div>
          <div className="center-content">
            <div className="my-order-shop">{order.storeName}</div>
            <div className="my-order-date">{order.OrderDate}</div>
          </div>
          <div
            className="right-content"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div
              className="my-order-price"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {order.OrderPrice} Bath
            </div>
            <Link to="/orderdetail" className="link">
              <img
                src={GoNext}
                alt="link"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
