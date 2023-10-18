import React from "react";

export const IniciarSesion = () => {
  return (
    <div class="flex justify-center pt-16">
      <div class="w-1/2">
        <form class="px-10 bg-gray-50 border rounded-md drop-shadow-lg">
          <div>
            <h1 class="text-4xl font-bold text-center py-10">Iniciar sesión</h1>
          </div>
          <div class="grid grid-cols-8">
            <div class="col-span-full flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div class="col-span-full flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <div class="col-span-full py-10 flex justify-center">
              <button
                type="submit"
                class="w-1/3 h-12 bg-blue-600 rounded-md text-white font-bold drop-shadow-lg border border-gray-400"
              >
                Acceder
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
