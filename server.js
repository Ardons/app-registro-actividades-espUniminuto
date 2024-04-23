import express from "express";
import dir from "path";

const app = express();
const dir_front = dir.resolve();
const rutaBuild = "/frontend/build/index.html";
console.log(dir_front);

app.use(express.static("frontend/build"));

app.get("/", (req, res) => {
    console.log("LOGIN")
    res.sendFile(dir_front + rutaBuild)
})

app.get("/actividades", (req, res) => {
    console.log("ACTIVIDADES")
    res.sendFile(dir_front + rutaBuild)
})

app.get("/registrar", (req, res) => {
    console.log("REGISTRO")
    res.sendFile(dir_front + rutaBuild)
})


app.listen("5500", () => {
    console.log("Servidor Iniciado")
})