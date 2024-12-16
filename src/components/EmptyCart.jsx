import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h2>Tu carrito esta vacio!</h2>
      <Link to='/Productos' className='btn btn-dark'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart