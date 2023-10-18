import React from "react";

export const Registrar = () => {
  return (
    <div class="flex justify-center pt-16">
      <div class="w-1/2">
        <form class="px-10 bg-gray-50 border rounded-md drop-shadow-lg">
          <div>
            <h1 class="text-4xl font-bold text-center pt-10">
              Crear una cuenta nueva
            </h1>
            <p class="text-center py-10">
              Ingrese sus datos para crear su cuenta nueva, todos los campos son
              obligatorios a menos que se indique lo contrario
            </p>
          </div>
          <div class="grid grid-cols-8">
            <div class="col-span-5 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                required
              />
            </div>

            <div class="col-span-3 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="text"
                id="rut"
                placeholder="Rut (con guión y sin puntos)"
                required
              />
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="tel"
                id="tel"
                placeholder="Teléfono (opcional)"
              />
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <select
                class="bg-white border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                required
              >
                <option value="" disabled selected>
                  Región
                </option>
              </select>
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <select
                class="bg-white border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                required
              >
                <option value="" disabled selected>
                  Comuna
                </option>
              </select>
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                required
              />
            </div>

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="passwordConf"
                placeholder="Confirmar contraseña"
                required
              />
            </div>

            <div class="col-span-full p-2">
              <input
                class="drop-shadow-lg w-4 h-4"
                type="checkbox"
                id="terms"
                placeholder="Términos y condiciones"
                required
              />
              <label for="checkbox">Acepto los términos y condiciones</label>
            </div>

            <div class="col-span-full py-10 flex justify-center">
              <button
                type="submit"
                class="w-1/3 h-12 bg-blue-600 rounded-md text-white font-bold drop-shadow-lg border border-gray-400"
              >
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
