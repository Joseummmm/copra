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
    <div className="grid grid-cols-6">
      {mensajes.map((mensaje, index) => (
        <div className="col-span-4">
        <div
          key={index}
          className="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8 m-auto"
        >
          <div className="col-span-6">
            <h3>Nombre: {mensaje.nombre}</h3>
            <p>Mensaje: {mensaje.mensaje}</p>
          </div>
          <div className="col-span-2 flex justify-end">
            <img src={mensaje.imagen} alt="" />
          </div>
          <div>
            <button
              type="button"
              className="border rounded-xl bg-blue-600 text-white p-1 px-3 shadow drop-shadow-xl"
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

