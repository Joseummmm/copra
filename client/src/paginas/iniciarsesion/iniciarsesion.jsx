import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const IniciarSesion = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [mensaje, setMensaje] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/usuarios/verificarCredenciales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.autenticado) {
        setMensaje("Inicio de sesión exitoso");
      } else {
        setMensaje("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMensaje("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2">
        <form
          className="px-10 bg-gray-50 border rounded-md drop-shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className="text-4xl font-bold text-center py-10">Iniciar sesión</h1>
          </div>
          <div className="grid grid-cols-8">
            {errors.email?.type === "required" && ( 
              <strong className="col-span-full flex justify-start p-2">* Ingrese un email válido</strong>
            )}
            <div className="col-span-full flex justify-center p-2">
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico" 
                {...register("email",{required:true})} 
              />
            </div>
            {errors.password?.type === "required" && (
              <strong className="col-span-full flex justify-start p-2">* Ingrese una contraseña válida</strong>
            )}
            <div className="col-span-full flex justify-center p-2">
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password",{required:true})}
              />
            </div>
            <div className="col-span-full py-10 flex justify-center">
              <button
                type="submit"
                className="w-1/3 h-12 bg-blue-600 rounded-md text-white font-bold drop-shadow-lg border border-gray-400"
              >
                Acceder
              </button>
            </div>
          </div>
          {mensaje && (
            <div className="col-span-full flex justify-center p-2">
              <strong>{mensaje}</strong>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
