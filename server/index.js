"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); // Agrega esta línea
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