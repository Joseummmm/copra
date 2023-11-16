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
    }
    else {
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

app.get("", (req, res) => {
    con.query("select * from practicas", function (error, results, field) {
        res.send(JSON.stringify(results));
    });
});


//correr tsc en terminal
//node dist/api.js
