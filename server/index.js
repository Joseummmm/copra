"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
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

app.use(bodyParser.json());

app.post('/insertarPracticas', (req, res) => {
    const practicas = req.body.practicas;
  
    // Iterar sobre las prácticas y realizar la inserción en la base de datos
    practicas.forEach((practica) => {
      const { id, title, nombreEmpresa, ubicacion, descripcion, category, imagen } = practica;
  
      const query = 'INSERT INTO practicas (id_practica, nombre_practica, datos_practica) VALUES (?, ?, ?)';
      const values = [id, title, JSON.stringify({ nombreEmpresa, ubicacion, descripcion, category, imagen })];
  
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

app.delete("/practicas/:id", (req, res) => {
    const idPractica = req.params.id;
    con.query("DELETE FROM practicas WHERE id_practica = ?", [idPractica], function (error, results, field) {
        if (error) {
            res.send(error);
        } else {
            res.send("La práctica se eliminó correctamente");
        }
    });
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
  app.get('/practicas/:id_practica', (req, res) => {
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
          res.json(result[0]);
        }
      }
    });
  });
  
  // Ruta para obtener una práctica por nombre_practica
  app.get('/practicas/nombre/:nombre_practica', (req, res) => {
    const nombrePractica = req.params.nombre_practica;
    const query = 'SELECT * FROM practicas WHERE nombre_practica = ?';
  
    con.query(query, [nombrePractica], (err, result) => {
      if (err) {
        console.error('Error al obtener la práctica por nombre:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: 'Práctica no encontrada' });
        } else {
          res.json(result[0]);
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
  
  // Ruta para eliminar una práctica por nombre_practica
  app.delete('/practicas/nombre/:nombre_practica', (req, res) => {
    const nombrePractica = req.params.nombre_practica;
    const query = 'DELETE FROM practicas WHERE nombre_practica = ?';
  
    con.query(query, [nombrePractica], (err, result) => {
      if (err) {
        console.error('Error al eliminar la práctica por nombre:', err);
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
  
  app.put('/practicas/:id_practica', (req, res) => {
    const idPractica = req.params.id_practica;
    const updatedData = req.body.updatedData;
  
    if (!updatedData) {
      return res.status(400).json({ error: 'Datos de actualización no proporcionados' });
    }
  
    const query = 'UPDATE practicas SET datos_practica = ? WHERE id_practica = ?';
    const values = [JSON.stringify(updatedData), idPractica];
  
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
  
  // Ruta para actualizar una práctica por nombre_practica
  app.put('/practicas/nombre/:nombre_practica', (req, res) => {
    const nombrePractica = req.params.nombre_practica;
    const updatedData = req.body.updatedData;
  
    if (!updatedData) {
      return res.status(400).json({ error: 'Datos de actualización no proporcionados' });
    }
  
    const query = 'UPDATE practicas SET datos_practica = ? WHERE nombre_practica = ?';
    const values = [JSON.stringify(updatedData), nombrePractica];
  
    con.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar la práctica por nombre:', err);
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
  
  