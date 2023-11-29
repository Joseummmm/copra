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
        {postulaciones.map((postulacion, index) => (
          <div className="col-span-1 p-4" key={index}>
            <div className="border border-black rounded-lg col-span-1 p-5 bg-gray-50 drop-shadow-lg grid grid-cols-8">
              <div className="col-span-2 grid justify-start">
                <img
                  src={postulacion.logo}
                  alt=""
                  className="drop-shadow-lg w-2/3"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <h3>{postulacion.nombre}</h3>
                <div className="flex items-center">
                  <p className="mr-2">Estado de solicitud : </p>
                  {postulacion.estado ? (
                    <>
                      <p className="text-blue-600"> Aprobado</p>
                    </>
                  ) : (
                    <p className="text-blue-600"> No aprobado</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};