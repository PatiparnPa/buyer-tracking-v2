import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Loading = () => {
  const navigate = useNavigate();
  const [userLineData, setUserLineData] = useState({
    userLineId: null,
    userLineName: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = localStorage.getItem("userLineData");
        if (userDataString) {
          console.log("userdatastring", userDataString);
          const userData = JSON.parse(userDataString);
          setUserLineData(userData);

          const response = await fetch(
            `https://order-api-patiparnpa.vercel.app/users/check/${userData.userLineId}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data.statusCode === 404 && data.error === "Not Found") {
              // User does not exist, create the user
              const createUserResponse = await fetch(
                "https://order-api-patiparnpa.vercel.app/users/create",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    lineID: userData.userLineId,
                    name: userData.userLineName,
                    basketID: "",
                    favorite_productID: "",
                  }),
                }
              );
              if (createUserResponse.ok) {
                const createdUserData = await createUserResponse.json();
                const userId = createdUserData._id;
                const createBasketResponse = await fetch(
                  "https://order-api-patiparnpa.vercel.app/baskets/create",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userID: userId }),
                  }
                );
                if (createBasketResponse.ok) {
                  const createdBasketData = await createBasketResponse.json();
                  const createFavoriteProductResponse = await fetch(
                    "https://order-api-patiparnpa.vercel.app/favorite_products/create",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ userID: userId }),
                    }
                  );
                  if (createFavoriteProductResponse.ok) {
                    const createdFavoriteProductData =
                      await createFavoriteProductResponse.json();
                    const updateUserResponse = await fetch(
                      `https://order-api-patiparnpa.vercel.app/users/${userId}`,
                      {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          favorite_productID: createdFavoriteProductData._id,
                          basketID: createdBasketData._id,
                        }),
                      }
                    );
                    if (updateUserResponse.ok) {
                      navigate("/");
                    } else {
                      throw new Error("Failed to update user data");
                    }
                  } else {
                    throw new Error("Failed to create favorite product");
                  }
                } else {
                  throw new Error("Failed to create basket");
                }
              } else {
                throw new Error("Failed to create user");
              }
            } else {
              // User exists, request access token
              const accessTokenResponse = await fetch(
                "https://order-api-patiparnpa.vercel.app/auth/login",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ lineID: userData.userLineId }),
                }
              );
              if (accessTokenResponse.ok) {
                const accessTokenData = await accessTokenResponse.json();
                localStorage.setItem(
                  "accessToken",
                  accessTokenData.accessToken
                );
                navigate("/");
              } else {
                throw new Error("Failed to fetch access token");
              }
            }
          } else {
            throw new Error("Failed to fetch user existence");
          }
        }
      } catch (error) {
        console.error("Error checking user existence:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>loading...</div>
      <div>User ID: {userLineData?.userLineId}</div>
      <div>User Name: {userLineData?.userLineName}</div>
    </div>
  );
};
