const express = require("express")
const cors = require('cors');
const app = express()


app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true // If you need to send cookies or authentication headers
}));

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use("/usuarios", require("./rotas/rotas-usuarios"))
app.use("/viagens", require("./rotas/rotas-viagens"))
app.use("/rotas", require("./rotas/rotas-rotas"))
app.use("/pontos", require("./rotas/rotas-pontos"))
app.use("/buscas", require("./rotas/rotas-buscas"))

app.listen(8001)