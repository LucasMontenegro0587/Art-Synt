import React from "react";
import CartWidget from "./CartWidget";
import handsLogo from "../images/hands-logo.png"; // Importa la imagen
import { Link } from "react-router-dom";

const NavBar = () => {
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
            to={`/Contacto`}
          >
            Contacto
          </Link>
        </div>

        <div className="flex items-center min-w-10">
          <Link to={`/Cart`}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
