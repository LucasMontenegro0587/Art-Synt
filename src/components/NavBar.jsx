import React from "react";
import handsLogo from "../images/hands-logo.png"; // Importa la imagen
import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext'

const NavBar = () => {
  const { cartQuantity } = useCart()
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo e Inicio */}
        <Link to={`/`} className="flex items-center">
          <img
            src={handsLogo}
            alt="main-logo"
            className="h-20 w-20"
          />
        </Link>

        <div className="md:flex space-x-6">
          <Link
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            to={`/Productos`}
          >
            Productos
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            to={`/Productos/Cyberware`}
          >
            Cyberware
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            to={`/Productos/Implantes`}
          >
            Implantes
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            to={`/Contacto`}
          >
            Contacto
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-500 transition duration-300"
            to={`/Carro`}
          >
            {cartQuantity() > 0 ? (<>Carrito {cartQuantity()}</>) : (<>Carrito</>)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
