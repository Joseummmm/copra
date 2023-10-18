import React from "react";
import { Mensaje } from "./mensaje";

export const BandejaEntrada = () => {
  const mensajes = [];

  for (let i = 0; i < 6; i++) {
    mensajes.push(<Mensaje key={i} />);
  }

  return (
    <div>
      <div className="border p-4">
        <header className="grid grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold m-auto pl-6">Copra</h1>
          </div>
          <div className="col-span-1 flex justify-end pr-6">
            <img
              className="px-2 h-8"
              src="../../assets/sobre.png"
              alt="Sobre"
            />
            <img
              className="px-2 h-8"
              src="../../assets/campana.png"
              alt="Campana"
            />
            <img
              className="px-2 h-8"
              src="../../assets/usuario.png"
              alt="Usuario"
            />
          </div>
        </header>
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl py-4">Bandeja de entrada</h1>
      </div>
      <div className="m-auto grid grid-cols-2 w-3/4">{mensajes}</div>
    </div>
  );
};
