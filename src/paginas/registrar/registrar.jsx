import React from "react";
import { useForm } from "react-hook-form";

export const Registrar = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div class="flex justify-center pt-16">
      <div class="w-1/2">
        <form
          class="px-10 bg-gray-50 border rounded-md drop-shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                })}
              />
              {errors.username && (
                <strong class="col-span-full flex justify-start p-2">
                  {errors.username.message}
                </strong>
              )}
            </div>
            <div class="col-span-3 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="text"
                id="rut"
                placeholder="Rut (con guión y sin puntos)"
                {...register("rut", {
                  required: true,
                  minLength: {
                    value: 9,
                    message: "Rut debe tener al menos 9 caracteres",
                  },
                })}
              />
            </div>
            {errors.rut && (
              <strong class="col-span-full flex justify-center p-2">
                {errors.rut.message}
              </strong>
            )}

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  minLength: {
                    value: /\S+@\S+\.\S+/,
                    message: "Ingrese un correo electronico valido",
                  },
                })}
              />
            </div>
            {errors.email && (
              <strong class="col-span-full flex justify-center p-2">
                {errors.email.message}
              </strong>
            )}
            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="tel"
                id="tel"
                placeholder="Telefono"
                {...register("tel", {
                  required: true,
                  minLength: {
                    value: 9,
                    message: "Telefono debe tener al menos 9 caracteres",
                  },
                })}
              />
            </div>
            {errors.tel && (
              <strong class="col-span-full flex justify-center p-2">
                {errors.tel.message}
              </strong>
            )}

            <div class="col-span-4 flex justify-center p-2">
              <select
                class="bg-white border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                required
              >
                <option value="" disabled selected>
                  Región
                </option>
                <option value="test1">Región de ejemplo 1</option>
                <option value="test2">Región de ejemplo 2</option>
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
                <option value="test3">Comuna de ejemplo 1</option>
                <option value="test2">Comuna de ejemplo 2</option>
              </select>
            </div>
            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
              />
            </div>
            {errors.password && (
              <strong class="col-span-full flex justify-center">
                {errors.password.message}
              </strong>
            )}

            <div class="col-span-4 flex justify-center p-2">
              <input
                class=" placeholder-black border border-black rounded-md pl-2 w-full drop-shadow-lg py-1"
                type="password"
                id="passwordConf"
                placeholder="Confirmar contraseña"
                {...register("passwordConf", { required: true })}
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
              <label htmlFor="checkbox">
                Acepto los términos y condiciones
              </label>
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
