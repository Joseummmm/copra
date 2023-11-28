import React, { useState } from "react";
import { Link } from "react-router-dom";

export const BarraNavegacion = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-16 bg-white border flex justify-between items-start px-4">
      <div className="flex items-start">
        <Link to="/" className="flex items-start justify-start">
          <div className="w-14 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-lg text-white drop-shadow-lg">
            CoPra
          </div>
        </Link>
      </div>

      <button
        className="focus:outline-none"
        onClick={handleMenuToggle}
      >
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          menuOpen ? 'ml-2 transition-all ease-in-out' : 'ml-[-100%] hidden'
        } bg-white`}
        style={{ width: "150px" }}
      >
        <Link to="/bandejaentrada" className="block py-2 px-4">
          Bandeja de Entrada
        </Link>
        <Link to="/busqueda" className="block py-2 px-4">
          Búsqueda
        </Link>
        <Link to="/iniciarsesion" className="block py-2 px-4">
          Iniciar Sesión
        </Link>
        <Link to="/notificaciones" className="block py-2 px-4">
          Postulaciones
        </Link>
        <Link to="/registrar" className="block py-2 px-4">
          Registrarse
        </Link>
      </div>
    </div>
  );
};
