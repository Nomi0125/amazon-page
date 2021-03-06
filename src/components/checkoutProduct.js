import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "../StateProvider";

export default function Checkoutproduct({ title, image, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="checkoutProduct_button"
          onClick={removeFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}
