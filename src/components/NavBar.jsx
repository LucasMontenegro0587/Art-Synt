import React from 'react';
import CartWidget from './CartWidget';
import handsLogo from '../images/hands-logo.png'; // Importa la imagen

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={handsLogo} alt='main-logo' style={{height: '100px', width:'100px'}} />
            <a className="navbar-brand" href="App.jsx">Inicio</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="ItemListContainer.jsx">Productos</a></li>
                    <li className="nav-item"><a className="nav-link" href="Contact.jsx">Contacto</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
