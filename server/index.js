"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const Captcha = require("node-captcha-generator"); 


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "copra"
});
con.connect(function (error) {
    if (error) {
        console.log("error conectando");
        return;
    } else {
        console.log("conexion exitosa");
    }
});
const configuracion = {
    hostname: "localhost",
    port: 3001,
};
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin","*"); 
  res.header("Acces-Control-Allow-Headers","Origin, X-Resquested-With, Content-Type, Accept"); 
  next();
});


app.get('/captcha',function(req,res){
  var c = new Captcha({
    length: 5, 
    size: {
      width: 450, 
      height: 200 
    }
  });

  const captchaImage = captcha.image; 
  const captchaText = captcha.text; 
  const textoDelCaptchaGenerado = c.text; 

  res.writeHead(200,{'Content-Type': 'image/png'}); 
  captchaImage.pipe(res); 

}); 




app.post('/verificar-captcha',(req,res)=>{
  const {captchaInput} = req.body;

  if(captchaInput === textoDelCaptchaGenerado){
    res.json({verificado: true}); 
  } else {
    res.json({verificado: false}); 
  }
}); 

app.post('/insertarPracticas', (req, res) => {
  const practicas = req.body.practicas;

  // Verifica si se recibieron prácticas en la solicitud
  if (!practicas || !Array.isArray(practicas)) {
    return res.status(400).json({ error: 'Formato de solicitud no válido' });
  }

  // Itera sobre las prácticas y realiza la inserción en la base de datos
  practicas.forEach((practica) => {
    const { id, title, nombreEmpresa, ubicacion, descripcion, category, imagen } = practica;

    const query = 'INSERT INTO practicas (id_practica, titulo, nombre_empresa, ubicacion, descripcion, categoria, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [id, title, nombreEmpresa, ubicacion, descripcion, category, imagen];

    con.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log(`Práctica con ID ${id} insertada correctamente`);
      }
    });
  });

  res.json({ message: 'Datos insertados correctamente' });
});

app.get('/practicas', (req, res) => {
    const query = 'SELECT * FROM practicas';
  
    con.query(query, (err, result) => {
      if (err) {
        console.error('Error al obtener las prácticas:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        res.json(result);
      }
    });
  });
  
  // Ruta para obtener una práctica por id_practica
  app.get('/practicas/id/:id_practica', (req, res) => {
    const idPractica = req.params.id_practica;
    const query = 'SELECT * FROM practicas WHERE id_practica = ?';
  
    con.query(query, [idPractica], (err, result) => {
      if (err) {
        console.error('Error al obtener la práctica por ID:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: 'Práctica no encontrada' });
        } else {
          res.json(result);
        }
      }
    });
  });
  
  
  // Ruta para obtener una práctica por nombre_practica
  app.get('/practicas/nombre/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const query = 'SELECT * FROM practicas WHERE titulo LIKE ?'; // Utilizamos LIKE para buscar coincidencias parciales
  
    con.query(query, [`%${titulo}%`], (err, result) => {
      if (err) {
        console.error('Error al obtener la práctica por título:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: 'Práctica no encontrada' });
        } else {
          res.json(result);
        }
      }
    });
  });
  

// Ruta para eliminar una práctica por id_practica
app.delete('/practicas/:id_practica', (req, res) => {
    const idPractica = req.params.id_practica;
    const query = 'DELETE FROM practicas WHERE id_practica = ?';
  
    con.query(query, [idPractica], (err, result) => {
      if (err) {
        console.error('Error al eliminar la práctica por ID:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Práctica no encontrada' });
        } else {
          res.json({ message: 'Práctica eliminada correctamente' });
        }
      }
    });
  });
  
// Ruta para actualizar una práctica por id
app.put('/practicas/:id_practica', (req, res) => {
  const idPractica = req.params.id_practica;
  const updatedData = req.body;

  if (!updatedData) {
    return res.status(400).json({ error: 'Datos de actualización no proporcionados' });
  }

  const { title, nombreEmpresa, ubicacion, descripcion, category, imagen } = updatedData;

  const query = 'UPDATE practicas SET titulo = ?, nombre_empresa = ?, ubicacion = ?, descripcion = ?, categoria = ?, imagen = ? WHERE id_practica = ?';
  const values = [title, nombreEmpresa, ubicacion, descripcion, category, imagen, idPractica];

  con.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar la práctica por ID:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Práctica no encontrada' });
      } else {
        res.json({ message: 'Práctica actualizada correctamente' });
      }
    }
  });
});

app.post('/usuarios', (req, res) => {
  const usuarios = req.body.usuarios;

  // Verifica si se recibieron usuarios en la solicitud
  if (!usuarios || !Array.isArray(usuarios)) {
      return res.status(400).json({ error: 'Formato de solicitud no válido' });
  }

  // Itera sobre los usuarios y realiza la inserción en la base de datos
  usuarios.forEach((usuario) => {
      const { email, tipo_usuario, nombre, descripcion, area_trabajo, password } = usuario;

      const query = 'INSERT INTO usuarios (email, tipo_usuario, nombre, descripcion, area_trabajo, password) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [email, tipo_usuario, nombre, descripcion, area_trabajo, password];

      con.query(query, values, (err, result) => {
          if (err) {
              console.error('Error al insertar en la base de datos:', err);
              res.status(500).json({ error: 'Error interno del servidor' });
          } else {
              console.log(`Usuario con email ${email} insertado correctamente`);
          }
      });
  });

  res.json({ message: 'Datos insertados correctamente' });
});

// Ruta para verificar correo y contraseña
app.post('/usuarios/verificarCredenciales', (req, res) => {
  const { email, password } = req.body;

  // Verifica si se recibieron el correo y la contraseña en la solicitud
  if (!email || !password) {
      return res.status(400).json({ error: 'Formato de solicitud no válido' });
  }

  // Realiza la consulta en la base de datos para verificar las credenciales
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  const values = [email, password];

  con.query(query, values, (err, result) => {
      if (err) {
          console.error('Error al verificar credenciales:', err);
          res.status(500).json({ error: 'Error interno del servidor' });
      } else {
          if (result.length > 0) {
              // Si se encuentra un usuario con las credenciales proporcionadas, devuelve true
              res.json({ autenticado: true });
          } else {
              // Si no se encuentra un usuario con las credenciales proporcionadas, devuelve false
              res.json({ autenticado: false });
          }
      }
  });
});

/*json de ejemplo

{
		"email":"joseurbina0208@gmail.com", 
		"password":"123456"
}

*/