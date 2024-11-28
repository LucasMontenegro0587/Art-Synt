import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ItemDetail = ({ product }) => {
  const [compra, setCompra] = useState(false)
  const { addToCart } = useCart()
  const onAdd = (cantidad) => {
    setCompra(true)
    addToCart(product, cantidad)
  }

  if (!product) {
    return <h2>¡Producto no encontrado!</h2>;
  }

  return (
    <div>
      <h1>Detalle del producto:{product.name}</h1>
      <img src={product.img} alt={product.img} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {compra
        ? <div>
          <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
        </div>
        : <ItemCount stock={product.stock} onAdd={onAdd} />
      }
    </div>
  )
}

export default ItemDetail