import React from "react";
import { Mensaje } from "./mensaje";

export const BandejaEntrada = () => {
  const mensajes = [];

  for (let i = 0; i < 6; i++) {
    mensajes.push(<Mensaje key={i} />);
  }

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl py-4">Bandeja de entrada</h1>
      </div>
      <div className="m-auto grid grid-cols-2 w-3/4">{mensajes}</div>
    </div>
  );
};
