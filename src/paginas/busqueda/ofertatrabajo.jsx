import React, { useEffect, useState } from "react";

export const OfertaTrabajo = () => {
  const [practicas, setPracticas] = useState([]); //se declaran las varibles practicas y set practicas practicas cumple la funcionalidad de almacenar objetos relacionados
  //SetPracticas se utiliza para modificar el estado del objeto practica

  useEffect(() => {
    //Se utiliza la funcion fetch para cargar el archivo JSON
    fetch("/testjsons/oferta1.json")
      .then((datos) => {
        //Se interpretan los datos como tipo JSON
        return datos.json();
      })
      .then((data) => {
        //setPracticas va ir actualizando el valor del objeto practicas
        setPracticas(data.practicas);
      });
  }, []);

  return (
    <div class="w-3/4 m-auto">
      {practicas.map((practica) => (
        <div key={practica.id} class="py-6">
          <div class="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-6">
            <h3 class="col-span-full">{practica.title}</h3>
            <p class="col-span-2">{practica.nombreEmpresa}</p>
            <p class="col-span-2">{practica.ubicacion}</p>
            <div class="col-span-2 flex justify-center">
              <img src={practica.imagen} alt="imagen de empresa" />
            </div>
            <div class="col-span-full flex justify-center">
              <p>{practica.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
