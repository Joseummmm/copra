import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Registrar = () => {
  // Inicializamos el formulario usando react-hook-form
  const {
    register, // Función para registrar campos del formulario
    handleSubmit, // Función para manejar la presentación del formulario
    formState: { errors }, // Objeto que contiene los errores del formulario
    getValues, // Función para obtener los valores del formulario
  } = useForm();

  const [rutErrorMessage, setRutErrorMessage] = useState(""); // Estado para el mensaje de error del RUT

  const onSubmit = (data) => {
    console.log(data); // Función que se ejecutará al enviar el formulario
  };

  // Función para validar el RUT
  const validateRut = (value) => {
    // Función para calcular el dígito verificador del RUT
    const calculateDV = (rut) => {
      let M = 0;
      let S = 1;
      let T = parseInt(rut);

      for (; T !== 0; T = Math.floor(T / 10)) {
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      }

      return S > 0 ? String(S - 1) : "k";
    };

    // Función para validar el formato del RUT y su dígito verificador
    const validaRut = (rut) => {
      const pattern = /^[0-9]+-[0-9kK]{1}$/; // Patrón para el formato del RUT
      if (!pattern.test(rut)) return false;

      const [numero, dv] = rut.split("-");
      return dv.toLowerCase() === calculateDV(numero);
    };

    if (validaRut(value)) {
      setRutErrorMessage(""); // Si el RUT es válido, se borra el mensaje de error
      return true;
    } else {
      setRutErrorMessage("RUT inválido"); // Si el RUT es inválido, se establece el mensaje de error
      return false;
    }
  };

  return (
    <div className="flex justify-center pt-16">
      <div className="w-1/2">
        <form
          className="px-10 bg-gray-50 border rounded-md shadow-lg"
          onSubmit={handleSubmit(onSubmit)} // Manejo de la presentación del formulario
        >
          <div>
            <h1 className="text-4xl font-bold text-center pt-10">
              Crear una cuenta nueva
            </h1>
            <p className="text-center py-10">
              Ingrese sus datos para crear su cuenta nueva, todos los campos son
              obligatorios a menos que se indique lo contrario
            </p>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de Nombre */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="text"
                id="username"
                placeholder="Nombre y apellidos"
                {...register("username", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                })}
              />
              {errors.username && (
                <strong className="text-red-600">
                  {errors.username.message}
                </strong>
              )}
            </div>
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de entrada de RUT */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="text"
                id="rut"
                placeholder="Rut (con guión y sin puntos)"
                {...register("rut", {
                  required: "Este campo es obligatorio",
                  validate: (value) => validateRut(value), // Validación personalizada para el RUT
                })}
              />
              {errors.rut && (
                <strong className="text-red-600">{errors.rut.message}</strong>
              )}
              {rutErrorMessage && (
                <strong className="text-red-600">{rutErrorMessage}</strong>
              )}
            </div>
            <div className="col-span-3 flex flex-col p-2">
              {/* Campo de Correo Electrónico */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Ingrese un correo electrónico válido",
                  },
                })}
              />
              {errors.email && (
                <strong className="text-red-600">{errors.email.message}</strong>
              )}
            </div>
            <div className="col-span-1 flex flex-col p-2">
              {/* Campo de Teléfono */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="tel"
                id="tel"
                placeholder="Teléfono"
                {...register("tel", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 9,
                    message: "Teléfono debe tener al menos 9 caracteres",
                  },
                })}
              />
              {errors.tel && (
                <strong className="text-red-600">{errors.tel.message}</strong>
              )}
            </div>
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de Región */}
              <select
                className="bg-white border border-black rounded-md pl-2 w-full shadow-lg py-1"
                {...register("region", {
                  required: "Seleccione una región",
                })}
              >
                <option value="" disabled selected>
                  Región
                </option>
                <option value="test1">Región de ejemplo 1</option>
                <option value="test2">Región de ejemplo 2</option>
              </select>
              {errors.region && (
                <strong className="text-red-600">
                  {errors.region.message}
                </strong>
              )}
            </div>
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de Comuna */}
              <select
                className="bg-white border border-black rounded-md pl-2 w-full shadow-lg py-1"
                {...register("comuna", {
                  required: "Seleccione una comuna",
                })}
              >
                <option value="" disabled selected>
                  Comuna
                </option>
                <option value="test3">Comuna de ejemplo 1</option>
                <option value="test2">Comuna de ejemplo 2</option>
              </select>
              {errors.comuna && (
                <strong className="text-red-600">
                  {errors.comuna.message}
                </strong>
              )}
            </div>
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de Contraseña */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <strong className="text-red-600">
                  {errors.password.message}
                </strong>
              )}
            </div>
            <div className="col-span-2 flex flex-col p-2">
              {/* Campo de Confirmación de Contraseña */}
              <input
                className="placeholder-black border border-black rounded-md pl-2 w-full shadow-lg py-1"
                type="password"
                id="passwordConf"
                placeholder="Confirmar contraseña"
                {...register("passwordConf", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.passwordConf && (
                <strong className="text-red-600">
                  {errors.passwordConf.message}
                </strong>
              )}
            </div>
            <div className="col-span-4 p-2">
              {/* Checkbox para aceptar términos y condiciones */}
              <input
                className="shadow-lg w-4 h-4"
                type="checkbox"
                id="terms"
                required
              />
              <label htmlFor="checkbox">
                Acepto los términos y condiciones
              </label>
            </div>
            <div className="col-span-full py-10 flex justify-center">
              {/* Botón de registro */}
              <button
                type="submit"
                className="w-1/3 h-12 bg-blue-600 rounded-md text-white font-bold shadow-lg border border-gray-400"
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
