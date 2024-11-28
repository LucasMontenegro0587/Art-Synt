import React from 'react'
import { useCart } from '../contexts/CartContext'
import EmptyCart from './EmpyCart'
import CartList from './CartList'

const CartView = () => {
  const { cart } = useCart()
  return (
    <div>
      {!cart.length
        ? <EmptyCart />
        : <div>
          <h2>Tu carrito</h2>
          <CartList />
        </div>
      }
    </div>
  )
}

export default CartView