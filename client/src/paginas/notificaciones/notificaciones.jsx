import React,{useState,useEffect} from "react";


export const Notificaciones = () => {
  const [postulaciones, setPostulaciones] = useState([]); // Cambio de notificaciones a postulaciones

  useEffect(() => {
    //Se utiliza la funcion fetch para cargar el archivo JSON
    fetch("/testjsons/postulaciones.json")
      .then((datos) => {
        //Se interpretan los datos como tipo JSON
        return datos.json();
      })
      .then((data) => {
        //setPracticas va ir actualizando el valor del objeto practicas
        setPostulaciones(data.postulaciones); // Cambio de notificaciones a postulaciones
      });
  }, []);

  return (
    <div className="border p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 w-1/2">
        {postulaciones.map((postulacion, index) => ( // Cambio de notificacion a postulacion
          <div className="col-span-1 p-4 " key={index}>
            <div className="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
              <div className="col-span-2 grid justify-start w-3/2">
                <img
                  src={postulacion.logo} // Cambio de notificacion a postulacion
                  alt=""
                  className=" drop-shadow-lg w-3/12"
                />
              </div>
              <div className="col-span-6">
                <h3>{postulacion.nombre}</h3>  {/* Cambio de notificacion a postulacion */}
                {postulacion.estado ? (
                  <div>
                    <p>Estado de solicitud: Aprobado</p>
                    <div className="flex justify-center p-2 col-span-1">
                      <button
                        type="submit"
                        className="text-white bg-blue-600 border rounded-xl py-1 w-1/2"
                      >
                        Contactar
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>Estado de solicitud: No aprobado</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};