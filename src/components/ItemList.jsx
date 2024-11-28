import { Link } from "react-router-dom";

const ItemList = ({ products }) => {

  return (
    <div>
      <div className="text-center">
        <h1>Listado de Productos</h1>
      </div>
      <div
        className="row"
        style={{
          display: "row",
          gridTemplateColumns: "repeat(2fr,1fr)",
          gap: "5px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          placeItems: "center",
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="col-md-4 my-2">
            <div className="card items-center">
              <img
                src={product.image}
                className="card-img-top max-w-xs"
                alt={product.name}
              />
              <div
                className="card-body space-x-1"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  placeItems: "center",
                }}
              >
                <button className="bg-green-500">Agregar al carrito</button>
                <Link to={`/Productos/${product.id}`} className="btn btn-primary">Ver detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList

