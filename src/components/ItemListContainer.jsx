import { useState, useEffect } from 'react';
import { getProducts } from "../mock/data";
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>

      <h1 className="text-center">Tienda</h1>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer;
