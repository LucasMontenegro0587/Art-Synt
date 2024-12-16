import React from 'react'
import { useCart } from '../contexts/CartContext'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const CartView = () => {
  const { cart } = useCart()
  return (
    <div className="mx-5 mt-10 p-6 bg-white shadow-lg rounded-lg">
      {!cart.length
        ? <EmptyCart />
        : <div>
          <h1 className="text-3xl font-bold text-center mb-4 border-b-2 border-gray-200 pb-2">
            Carrito
          </h1>
          <CartList />
        </div>
      }
    </div>
  )
}

export default CartView