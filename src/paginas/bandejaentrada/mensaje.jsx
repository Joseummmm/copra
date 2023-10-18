import React from "react";

export const Mensaje = () => {
  return (
    <div className="col-span-1 p-4">
      <div className="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8 m-auto">
        <div className="col-span-6">
          <h3>Nombre: Lorem Ipsum</h3>
          <p>
            Mensaje: Non sapien. Sed nec malesuada lacus. Cras pellentesque nisi
            libero...
          </p>
        </div>
        <div className="col-span-2 flex justify-end">
          <img
            src="rsc/Imagenes/user-2935527_1280.webp"
            className="w-20 rounded-2xl drop-shadow-lg"
          />
        </div>
        <div className="col-span-full flex justify-center p-2">
          <button
            type="button"
            className="border rounded-xl bg-blue-600 text-white p-1 px-3 shadow drop-shadow-xl"
          >
            Chatear
          </button>
        </div>
      </div>
    </div>
  );
};
