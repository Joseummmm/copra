import React from "react";
import { OfertaTrabajo } from "./ofertatrabajo";

export const Busqueda = () => {
  const ofertasTrabajos = [];

  for (let i = 0; i < 1; i++) {
    ofertasTrabajos.push(<OfertaTrabajo key={i} />);
  }
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl py-4">Búsqueda</h1>
      </div>
      <div class="flex justify-center py-8">
        <form class="w-3/4 grid grid-cols-8  ">
          <span class="p-2 col-span-6">
            <input
              type="text"
              placeholder="Nombre de práctica buscada"
              class="placeholder-black border border-black rounded-xl py-1 px-2 w-full"
            />
          </span>
          <span class="p-2 col-span-2">
            <button
              type="submit"
              class="text-white bg-blue-600 border rounded-xl py-1 w-full"
            >
              Buscar práctica
            </button>
          </span>
        </form>
      </div>
      <div class="w-full">{ofertasTrabajos}</div>
    </div>
  );
};
