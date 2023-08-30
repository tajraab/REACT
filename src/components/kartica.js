import React from "react";
import "./Card.css";
export default function Card({ product }) {
  return (
    <div className="catdContainer">
      <div className="cardBadge">
        <p>{product.discountPercentage}</p>
      </div>
      <div className="cardDetails">
        <h3 className="title">{product.title}</h3>
        <h5 className="description">{product.description}</h5>
        <p>Brend:{product.brand}</p>
        <p>Stock:{product.stock}</p>
        <p>Price:{product.price}</p>
      </div>
    </div>
  );
}
