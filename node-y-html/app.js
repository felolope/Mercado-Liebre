const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3020, () => {console.log("Servidor escuchando en el puerto 3020")})
