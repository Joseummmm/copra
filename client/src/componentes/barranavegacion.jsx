import React from "react";
import { Link } from "react-router-dom";

//barra de navegacion
export const BarraNavegacion = () => {
  return (
    <div className="w-full h-16 bg-white grid grid-cols-3 border">
      <Link to="/" className="px-4 justify-start col-span-1 my-auto">
        <hp class="ml-5 w-14 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-lg text-white drop-shadow-lg">
          CoPra
        </hp>
      </Link>
      <div className="mr-5 flex items-center font-bold text-blue-600 justify-end col-span-2">
        <Link to="/bandejaentrada" className="px-4">
          Bandeja de Entrada
        </Link>
        <Link to="/busqueda" className="px-4">
          Búsqueda
        </Link>
        <Link to="/chat" className="px-4">
          Chat
        </Link>
        <Link to="/iniciarsesion" className="px-4">
          Iniciar Sesión
        </Link>
        <Link to="/notificaciones" className="px-4">
          Notificaciones
        </Link>
        <Link to="/registrar" className="px-4">
          Registrarse
        </Link>
      </div>
    </div>
  );
};
