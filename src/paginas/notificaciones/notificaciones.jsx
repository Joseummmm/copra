import React from "react";
import aprobado from '../../assets/aprobado.png';
import noAprobado from '../../assets/no_aprobado.png';
import logo from '../../assets/logo.png';

export const Notificaciones = () => {
  return (
      <div class="border p-4 flex justify-center items-center h-screen">
        <div class="grid grid-cols-1 w-1/2">
          <div class="col-span-1 p-4">
            <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
              <div class="flex items-start justify-start h-screen">
                <img src={logo} alt="" class="mx-auto w-20 rounded-2xl drop-shadow-lg"/>
              </div>
              <div class="col-span-6">
                <h3>Nombre practica</h3>
                <p>Estado de solicitud: No aprobado</p>
              </div>
            <div class="grid grid-cols-1 justify-center items-center h-screen">
              <img src={aprobado} alt="" class="px-4 h-10" />
            </div>
          </div>
        </div>
        <div class="col-span-1 p-4">
          <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
            <div class="grid items-start justify-start h-screen">
              <img src={logo} alt="" class ="mx-auto w-20 rounded-2xl drop-shadow-lg"/>
            </div>
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
            <div class="grid grid-cols-1 justify-center items-center h-screen">
              <img src={noAprobado} alt="" class="px-4 h-10" />
            </div>
            </div>
          </div>
        </div>
      </div>
   
   
  );
};
