import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartList = () => {
  const { cart, cartTotal, clear } = useCart();

  const clearCart = () => {
    Swal.fire({
      title: "¿Está seguro?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `Continuar Comprando`,
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-4">
          {cart.map((prod) => (
            <CartItem key={prod.id} prod={prod} />
          ))}
        </div>

        <div className="text-right text-lg font-bold mt-6">
          Total a pagar: <span className="text-green-600">${cartTotal()}</span>
        </div>

      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-2xl flex flex-col items-center justify-center w-full">
          <div className="flex justify-between items-center mt-8 px-6 w-full space-x-4">

            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors no-underline"
              to="/Checkout"
            >
              Terminar Compra
            </Link>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              onClick={clearCart}
            >
              Borrar Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
