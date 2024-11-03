import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Librería de íconos opcional

const CartWidget = () => {
    const itemCount = 7; // Número fijo, representando la cantidad en el carrito. Luego se modificará

    return (
        <div className="cart-widget">
            <span className="badge badge-pill badge-secondary">{itemCount}</span>
            <FaShoppingCart />
        </div>
    );
}

export default CartWidget;
