import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 7;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" /> {/* Ícono de carrito */}
      <span className="item-count">{itemCount}</span> {/* Cantidad de ítems */}
    </div>
  );
};

export default CartWidget;
