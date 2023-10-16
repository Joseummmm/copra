import React from "react";
import { Link } from "react-router-dom";
import "./barranavegacion.css";

//barra de navegacion
export const BarraNavegacion = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/bandejaentrada">be</Link>
        <Link to="/busqueda">bu</Link>
        <Link to="/chat">ch</Link>
        <Link to="/iniciarsesion">in</Link>
        <Link to="/notificaciones">no</Link>
        <Link to="/registrar">re</Link>
      </div>
    </div>
  );
};
