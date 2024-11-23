import React from 'react';

const products = [
    {id: 1, name: 'Brazos Gorila', image: 'src/images/gorilla-arms.png'},
    {id: 2, name: 'Garras Mantis', image: 'src/images/mantis-blades.png'},
    {id: 3, name: 'Sistema de lanzaproyectiles', image: 'src/images/proyectile-ls.png'},
    {id: 4, name: 'Sandevistan', image: 'src/images/sandevistan.png'},
    {id: 5, name: 'Implante facial', image: 'src/images/facial-cyberware.png'},
    {id: 6, name: 'Disco de memoria externo', image: 'src/images/disk-ram.png'},
    {id: 7, name: 'Ópticas Kiroshi Oráculo', image: 'src/images/kiroshi-optics.png'},
    {id: 8, name: 'Reflector sináptico', image: 'src/images/synaptic-reflector.png'},
    {id: 9, name: 'Sensores atómicos', image: 'src/images/atomic-sensors.png'},
    {id: 10, name: 'Interfaz visual', image: 'src/images/visual-interface.png'}
];

function ItemListContainer({ greeting }) {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="row" style={{ display: 'row', gridTemplateColumns: 'repeat(2fr,1fr)', gap: '5px', justifyContent: 'center', textAlign: 'center', alignItems: 'center', placeItems: 'center'}}>
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body" style={{justifyContent: 'center', alignItems: 'center', placeItems: 'center'}}>
                                <button className="btn btn-primary">Agregar al carrito</button>
                                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemListContainer;
