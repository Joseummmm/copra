import React, { useEffect, useState } from "react";

export const OfertaTrabajo = () => {
  const [practicas, setPracticas] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al servidor
    fetch("http://localhost:3001/practicas")
      .then((response) => {
        // Verificar si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error(`Error al obtener las prácticas: ${response.status}`);
        }
        // Interpretar la respuesta como JSON
        return response.json();
      })
      .then((data) => {
        // Actualizar el estado con los datos obtenidos
        setPracticas(data);
      })
      .catch((error) => {
        console.error("Error en la solicitud GET:", error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
      });
  }, []);

  return (
    <div className="w-3/4 m-auto">
      {practicas.map((practica) => (
        <div key={practica.id_practica} className="py-6">
          <div className="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-6">
            <h3 className="col-span-full">{practica.titulo}</h3>
            <p className="col-span-2">{practica.nombre_empresa}</p>
            <p className="col-span-2">{practica.ubicacion}</p>
            <div className="col-span-2 flex justify-end">
              <div className="drop-shadow-lg grid grid-cols w-3/4">
                <img src={practica.imagen} alt="imagen de empresa" className="w-1/2" />
              </div>
            </div>
            <div className="col-span-full flex justify-center">
              <p>{practica.descripcion}</p>
            </div>
            <div className="col-span-full flex justify-center">
              <button
                type="button"
                className="border rounded-xl bg-blue-600 text-white p-2 px-6 shadow drop-shadow-xl mx-4"
              >
                Postular
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
