import { Link } from "react-router-dom";
import Goback from "../assets/goback.png";
import { useState } from "react";

export const UserName = () => {
  const [newName, setNewName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSaveClick = () => {
    // Implement your logic to save the new name
    console.log("Saving new name:", newName);
  };
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </Link>
        <h5 style={{ marginTop: "2%", marginLeft: "10%" }}>Display Name</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div className="user-input-container">
        <label htmlFor="newName" className="input-label"></label>
        <input
          type="text"
          id="newName"
          value={newName}
          onChange={handleInputChange}
          placeholder="New Name"
          className="user-input"
        />
        <button onClick={handleSaveClick} className="save-button">
          Save
        </button>
      </div>
    </>
  );
};
