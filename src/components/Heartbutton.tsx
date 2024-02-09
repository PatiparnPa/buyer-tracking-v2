import { useState } from "react";
import Heart from "../assets/heart-removebg-preview.png";
import Heart2 from "../assets/heart-removebg-preview-removebg-preview.png";

export const HeartButton = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  const toggleHeart = () => {
    setIsHeartActive((prev) => !prev);
  };

  return (
    <>
      <button
        style={{ background: "none", border: "none", cursor: "pointer", marginRight:'5px' }}
        onClick={toggleHeart}
      >
        <img
          src={isHeartActive ? Heart2 : Heart}
          alt="heart"
          style={{ width: "25px", height: "25px" }}
        ></img>
      </button>
    </>
  );
};