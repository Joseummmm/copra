import React from "react";
import {useForm} from "react-hook-form"; //se carga el useForm de react-hook-form para el manejo de formularios 

export const IniciarSesion = () => { 
  const {register,formState:{errors},handleSubmit} = useForm(); //la variable register es util para capturar y validar los datos del formulario
  //formState accede al objeto errors que almacena los errores de validacion que ocurren en el campo del formulario
  
  const onSubmit = (data) => { 
    console.log(data);
  }


  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2">
        <form className="px-10 bg-gray-50 border rounded-md drop-shadow-lg"
        onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-4xl font-bold text-center py-10">Iniciar sesión</h1>
          </div>
          <div className="grid grid-cols-8">
              {
                errors.email?.type === "required" && ( 
                  <strong class="col-span-full flex justify-start p-2">* Ingrese un email valido</strong>
                )
              }
            <div className="col-span-full flex justify-center p-2">
              <input
                className=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico" 
                {...register("email",{required:true})} 
              />
            </div>
              {
                errors.password?.type === "required" && (
                  <strong class="col-span-full flex justify-start p-2">* Ingrese una contraseña valida</strong>
                )
              }
            <div className="col-span-full flex justify-center p-2">
              <input
                className=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password",{required:true})}
              />
            </div>
            <div className="col-span-full py-10 flex justify-center">
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
