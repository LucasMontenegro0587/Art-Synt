import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Loader } from "lucide-react";
import ItemDetail from "../components/ItemDetail"
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const collectionProd = collection(db, "Items")
    const docRef = doc(collectionProd, id)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setProducto({ id: res.id, ...res.data() })
        } else {
          setInvalidItem(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail product={producto} />}
    </div>
  )
}

export default ItemDetailContainer;
