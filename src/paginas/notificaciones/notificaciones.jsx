import React from "react";

export const Notificaciones = () => {
  return (
    <div class="border p-4">
      <div class="grid grid-cols-1 w-1/2">
        <div class="col-span-1 p-4">
          <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
            <div class="col-span-6">
              <h3>Nombre practica</h3>
              <p>Estado de solicitud: No aprobado</p>
            </div>
            <div class="grid grid-cols-1">
              <img src="rsc/no_aprobado.png" class="px-4 h-10" />
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
            <div class="col-span-6">
              <h3>Nombre practica</h3>
              <p>Estado de solicitud: Aprobado</p>
              <div class="flex justify-center p-2 col-span-1">
                <button
                  type="submit"
                  class="text-white bg-blue-600 border rounded-xl py-1 w-1/2"
                >
                  Contactar
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <img src="rsc/aprobado.png" class="px2 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
