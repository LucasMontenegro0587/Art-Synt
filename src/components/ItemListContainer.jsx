import React from 'react';

const products = [
    {
        id: 1,
        name: 'Brazos Gorila',
        image: 'src/images/gorilla-arms.png',
        description: 'Diseñados para proporcionar una fuerza física extraordinaria',
        price: 'U$S 2500',
        category: 'Cyberware',
    },
    {
        id: 2,
        name: 'Garras Mantis',
        image: 'src/images/mantis-blades.png',
        description: 'Ofrece ataques rápidos y devastadores contra los desprevenidos ',
        price: 'U$S 3000',
        category: 'Cyberware',
    },
    {
        id: 3,
        name: 'Sistema de lanzaproyectiles',
        image: 'src/images/proyectile-ls.png',
        description: 'Potencia de fuego adicional en combate, una forma efectiva de atacar a distancia',
        price: 'U$S 5000',
        category: 'Cyberware',
    },
    {
        id: 4,
        name: 'Sandevistan',
        image: 'src/images/sandevistan.png',
        description: 'Centrado en la agilidad y velocidad, permite movimientos a velocidades sobrehumanas',
        price: 'U$S 10000',
        category: 'Cyberware',
    },
    {
        id: 5,
        name: 'Implante facial',
        image: 'src/images/facial-cyberware.png',
        description: 'Un impacto significativo en la manera de interactuar con el mundo',
        price: 'U$S 1500',
        category: 'Cyberware',
    },
    {
        id: 6,
        name: 'Disco de memoria externo',
        image: 'src/images/disk-ram.png',
        description: 'Optimiza tus habilidades ejecutando múltiples Quickhacks defensivos u ofensivos más versátiles',
        price: 'U$S 2000',
        category: 'Implantes',
    },
    {
        id: 7,
        name: 'Ópticas Kiroshi Oráculo',
        image: 'src/images/kiroshi-optics.png',
        description: 'Sistema avanzado de visión con funciones tácticas e interfaz de usuario detallada que recopila información en tiempo real',
        price: 'U$S 4000',
        category: 'Implantes',
    },
    {
        id: 8,
        name: 'Reflector sináptico',
        image: 'src/images/synaptic-reflector.png',
        description: 'Realiza esquives o maniobras evasivas ralentizando el tiempo, creando una oportunidad para contraatacar',
        price: 'U$S 6000',
        category: 'Implantes',
    },
    {
        id: 9,
        name: 'Sensores atómicos',
        image: 'src/images/atomic-sensors.png',
        description: 'Detecta movimientos sutiles y cambios mínimos en el ambiente con éste aumento sensorial de avanzada que aumenta la precisión de percepción del entorno',
        price: 'U$S 8000',
        category: 'Implantes',
    },
    {
        id: 10,
        name: 'Interfaz visual',
        image: 'src/images/visual-interface.png',
        description: 'Mejora tu precisión y reconocimiento resaltando enemigos y objetos importantes desde una distancia considerable',
        price: 'U$S 7500',
        category: 'Implantes',
    }
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
                                <h2 className="card-title">{product.name}</h2>
                                <h6 className="card-text">{product.description}</h6>
                                <h3 className="card-text">{product.price}</h3>
                                <h5 className="card-text">{product.category}</h5>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemListContainer;
