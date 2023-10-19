import React from "react";
import usuario2 from '../../assets/usuario2.webp'

export const OfertaTrabajo = () => {
  return (
    <div class="col-span-1 p-4">
      <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
        <div class="col-span-6">
          <h3>Nombre de práctica</h3>
          <p>Nombre de empresa</p>
          <p>Ubicación</p>
        </div>
        <div class="col-span-2 flex justify-end">
          <img
            src={usuario2}
            alt=""
            class="w-20 rounded-2xl drop-shadow-lg"
          />
        </div>
        <div class="col-span-full flex justify-center">
          <p>Descripción general del trabajo</p>
        </div>
      </div>
    </div>
  );
};
