import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Contacto = () => {
  const [contacto, setContacto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/testjsons/contactos.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contactoSeleccionado = data.contacto.find((c) => c.id === parseInt(id, 10));
        setContacto(contactoSeleccionado ? [contactoSeleccionado] : []);
      });
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen">
      {contacto.map((contactoItem, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={contactoItem.imagen} alt="imagen de la empresa" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Datos de contacto</div>
            <p className="text-gray-700 text-base">Ubicación: {contactoItem.ubicacion}</p>
            <p className="text-gray-700 text-base">Teléfono: {contactoItem.telefono}</p>
            <p className="text-gray-700 text-base">Correo: {contactoItem.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
