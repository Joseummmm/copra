import React from "react";

export const HomePage = () => {
  return (
    <div>
      <div class="pt-44">
        <h1 class=" w-1/2 h-28 bg-blue-600 rounded-xl flex items-center justify-center m-auto text-6xl font-bold text-white drop-shadow-lg">
          CoPra
        </h1>
        <form id="barraBusqueda" class="m-auto w-1/4 pt-6">
          <input
            type="text"
            id="busqueda"
            placeholder="Buscar empleo"
            class="bg-gray-100 placeholder-black p-1 border w-full rounded-xl drop-shadow-lg"
          />
        </form>
      </div>
    </div>
  );
};
