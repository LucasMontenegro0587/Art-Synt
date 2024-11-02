import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente CartWidget

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Inicio</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="ItemListContainer.jsx">Productos</a></li> { /* Incorporar mods */ }
                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                </ul>
            </div>
            <CartWidget /> {/* Colocado el CartWidget */}
        </nav>
    );
}

export default NavBar;
