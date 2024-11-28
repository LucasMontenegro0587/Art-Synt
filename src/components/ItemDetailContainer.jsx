import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getProducts } from "../mock/data";
import { Loader } from "lucide-react";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    setLoading(true)
    getProducts(id)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div>
      {loading ? <Loader /> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer;
