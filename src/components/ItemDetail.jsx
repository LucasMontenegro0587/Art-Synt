import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

const ItemDetail = ({ product }) => {
  const [compra, setCompra] = useState(false)
  const { changeToCart, quantity } = useCart()

  const onAdd = (cantidad) => {
    setCompra(true)
    changeToCart(product, cantidad)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} añadido al carrito`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  if (!product) {
    return <h2>¡Producto no encontrado!</h2>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col max-w-md w-full items-center justify-center mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Detalle del producto: {product.title}</h1>
        <img src={product.image} alt={product.title} className="card-img-top max-w-xs mb-4" />
        <p className="text-center mb-4">{product.description}</p>
        <p className="text-center text-xl font-semibold mb-6">${product.price}</p>
        {compra ? (
          <div className="flex justify-center space-x-4">
            <Link className="btn btn-dark" to="/Productos">Seguir comprando</Link>
            <Link className="btn btn-dark" to="/Carro">Ir al carrito</Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} onAdd={onAdd} max={product.stock} initialCount={quantity(product.id)} />
        )}
      </div>
    </div>
  )

}

export default ItemDetail