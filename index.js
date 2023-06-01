const express = require("express");
const app = express();
require("./base-orm/sqlite-init"); 

app.get("/", (req, res) => {
    res.send("Backend Iniciado!");
});

app.use(express.json());

const personajesDBZ = require("./rutas/personajes");
app.use(personajesDBZ)

const equipos = require("./rutas/equipos")
app.use(equipos)

const comidas = require("./rutas/comidas");
app.use(comidas)

const vehiculos = require("./rutas/vehiculos");
app.use(vehiculos)

if (!module.parent) {   
    const port = process.env.PORT || 3000;   
    app.locals.fechaInicio = new Date();
    app.listen(port, () => {
      console.log(`sitio escuchando en el puerto ${port}`);
    });
  }
  module.exports = app; // para testing
  