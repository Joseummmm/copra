import React, { useEffect, useState } from "react";

export const Mensaje = () => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetch("/testjsons/mensajes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMensajes(data.mensajes);
      });
  }, []);

  return (
    <div>
      {mensajes.map((mensaje, index) => (
        <div class="p-4">
          <div
            key={index}
            class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8 m-auto w-full"
          >
            <div class="col-span-6">
              <h3>Nombre: {mensaje.nombre}</h3>
              <p>Mensaje: {mensaje.mensaje}</p>
            </div>
            <div class="col-span-2 flex justify-center w-3/2">
              <img src={mensaje.imagen} alt="imagen de empresa" class="flex justify-center w-3/2"/>
            </div>
            <div class="col-span-full flex justify-center">
              <button
                type="button"
                class="border rounded-xl bg-blue-600 text-white p-1 px-3 shadow drop-shadow-xl"
              >
                Chatear
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
