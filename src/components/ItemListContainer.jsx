import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { category } = useParams()

  useEffect(() => {
    setLoading(true)
    //Conectamos con nuestra coleccion
    const productsCollection = category
      ? query(collection(db, "Items"), where("categoryId", "==", category))
      : collection(db, "Items")

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data()
          }
        })
        setProducts(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [category])

  return (
    <div className='w-full'>
      <h1 className="text-center">Art-Synt</h1>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer;
