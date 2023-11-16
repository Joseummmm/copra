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

con.connect(function(error:any) {
    if (error) {
        console.log("error conectando");
        return;
    } else {
        console.log("conexion exitosa");
    }
});
const configuracion = {
    hostname: "localhost",
    port:3000,
}

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
})

app.get("", (req:any, res:any) => {
    con.query("select * from practicas", function(error:any, results:any, field:any) {
        res.send(JSON.stringify(results));
    })
})
//correr tsc en terminal
//node dist/api.js