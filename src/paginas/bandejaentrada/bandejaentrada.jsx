import React from "react";
import { Mensaje } from "./mensaje";

export const BandejaEntrada = () => {
  const mensajes = [];

  for (let i = 0; i < 1; i++) {
    mensajes.push(<Mensaje key={i} />);
  }

  return (
    <div>
      <div class="w-full flex justify-center">
        <h1 className="text-3xl py-4">Bandeja de entrada</h1>
      </div>
      <div>
        <div className="m-auto grid grid-cols-auto w-1/2">{mensajes}</div>
      </div>
    </div>
  );
};
