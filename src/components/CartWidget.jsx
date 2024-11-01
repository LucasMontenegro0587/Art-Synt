import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Librería de íconos opcional

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span className="badge badge-pill badge-primary">7</span>
        </div>
    );
}

export default CartWidget;
