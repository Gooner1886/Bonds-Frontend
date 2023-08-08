// src/BondDetails.js
import { useState } from "react";
import React from "react";
import axios from "axios";
import "./securitydetails.css";

const SecurityDetails = ({ }) => {
  const bond = {
    name: "Samsung",
    isin: "NE3245",
    cusip: "udhcfsb",
    maturityDate: "23-04-2023",
    issuer: "Govt",
    coupon: "efed",
    type: "pro",
    facevalue: 2534739,
    status: "Successful",
  };

  const handleAddToWishlist = (newItem) => {
    if (newItem.trim() !== "") {
      // Replace 'YOUR_BACKEND_API_URL' with the actual API endpoint to add an item to the wishlist
      axios
        .post("", { item: newItem })
        .then((response) => { })
        .catch((error) => {
          console.error("Error adding item to wishlist:", error);
        });
    }
  };

  return (
    <div className="bond-container">
      <h1>Bond Details</h1>
      <div className="bond-attributes">
        <div className="bond-attribute">
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            <strong>ISIN:</strong>
          </p>
          <p>
            <strong>CUSIP:</strong>
          </p>
          <p>
            <strong>Maturity Date:</strong>
          </p>
          <p>
            <strong>Issuer:</strong>
          </p>
          <p>
            <strong>Coupon:</strong>
          </p>
          <p>
            <strong>Type:</strong>
          </p>
          <p>
            <strong>FaceValue:</strong>
          </p>
          <p>
            <strong>Status:</strong>
          </p>
        </div>
        <div className="bond-value">
          <p>{bond.name}</p>
          <p>{bond.isin}</p>
          <p>{bond.cusip}</p>
          <p>{bond.maturityDate}</p>
          <p>{bond.issuer}</p>
          <p>{bond.coupon}</p>
          <p>{bond.type}</p>
          <p>{bond.facevalue}</p>
          <p>{bond.status}</p>
        </div>
      </div>
      <button onClick={() => handleAddToWishlist(bond)}>Add to Wishlist</button>
    </div>
  );
};

export default SecurityDetails;
