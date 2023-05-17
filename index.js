const express = require("express");
const app = express();
require("./base-orm/sqlite-init"); 

app.get("/", (req, res) => {

    res.send("Backend memememme!");
});

app.use(express.json());

const personajesDBZ = require("./rutas/personajes");
app.use(personajesDBZ)










const port = 3000; 











app.listen(port, () => {
    console.log("SERVIDOR INICIADO!")
});
