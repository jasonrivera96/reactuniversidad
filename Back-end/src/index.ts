import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors());

app.get("/ping", (req, res) => {
    console.log("Alguien ha dado ping");
    res.setHeader("Content-Type", "application/json");
    res.send("pong");
})

app.get("/hola/:nombre/:apellido", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    console.log("Han ingresado sus nombres");
    res.send({nombre: nombre, apellido: apellido});
})


app.listen(PORT, () => {
    console.log("Server running in port: " + PORT)
})
