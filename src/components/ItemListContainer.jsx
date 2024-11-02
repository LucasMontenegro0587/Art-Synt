import React from 'react';

const products = [
    {
        id: 1,
        name: 'Brazos Gorila',
        image: 'src/images/gorilla-arms.png',
        description: 'Diseñados para proporcionar una fuerza física extraordinaria',
        price: 'U$S 25',
        category: 'Cyberware',
    },
    {
        id: 2,
        name: 'S.L.P.',
        image: 'src/images/proyectile-ls.png',
        description: 'Potencia de fuego adicional en combate, una forma efectiva de atacar a distancia',
        price: 'U$S 50',
        category: 'Cyberware',
    },
    {
        id: 2,
        name: 'Garras Mantis',
        image: 'src/images/mantis-blades.png',
        description: 'Ofrece ataques rápidos y devastadores contra los desprevenidos ',
        price: 'U$S 30',
        category: 'Cyberware',
    },
    {
        id: 2,
        name: 'Sandevistan',
        image: 'src/images/sandevistan.png',
        description: 'Centrado en la agilidad y velocidad, permite movimientos a velocidades sobrehumanas',
        price: 'U$S 100',
        category: 'Cyberware',
    },
    {
        id: 2,
        name: 'Implante facial',
        image: 'src/images/facial-cyberware.png',
        description: 'Un impacto significativo en la manera de interactuar con el mundo',
        price: 'U$S 15',
        category: 'Cyberware',
    },
];

function ItemListContainer({ greetings }) {
    return (
        <div>
            <h2>{greetings}</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                                <p className="card-text">{product.category}</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemListContainer;
