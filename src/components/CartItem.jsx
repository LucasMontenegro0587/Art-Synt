import React from 'react'
import { useCart } from '../contexts/CartContext'

const CartItem = ({ prod }) => {
  const { removeItem } = useCart()
  return (
    <div className="flex justify-between items-center w-full p-4 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        {/* Imagen con borde */}
        <img
          src={prod.image}
          alt={prod.title}
          className="w-24 h-24 object-cover border-2 border-gray-400 rounded-md"
        />
        <div>
          {/* Título del producto */}
          <span className="font-bold text-lg">{prod.title}</span>
          <div className="text-sm text-gray-500">Cantidad: {prod.cantidad}</div>
          <div className="text-sm text-gray-500">Precio unitario: ${prod.price},00</div>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        {/* Precio final */}
        <span className="font-bold">Precio final: ${prod.cantidad * prod.price},00</span>
        {/* Botón de eliminar */}
        <button
          className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors"
          onClick={() => removeItem(prod.id)}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default CartItem
