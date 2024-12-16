import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

const ItemList = ({ products }) => {
  const { quantity, addToCart } = useCart()

  const onAdd = (index) => {
    addToCart(products[index], 1)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${products[index].title} añadido al carrito`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div>
      <div className="text-center">
        <h1>Listado de Productos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 justify-items-center">
        {products.map((product, index) => (
          <div key={product.id} className="p-6">
            <div className="card text-center border border-gray-300 rounded-lg shadow-xl p-6">
              <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
              <img
                src={product.image}
                className="card-img-top max-w-xs mx-auto mb-6"
                alt={product.title}
              />
              <div
                className="card-body space-x-1"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  placeItems: "center",
                }}
              >
                {quantity(product.id) < product.stock && (
                  <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors" onClick={() => onAdd(index)}>
                    Agregar al carrito
                  </button>
                )}
                <Link
                  to={`/Producto/${product.id}`}
                  className="btn btn-primary bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList

