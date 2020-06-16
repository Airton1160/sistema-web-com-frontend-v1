const express = require("express")
const server = express()
//configurando uma pasta publica
server.use(express.static("public"))// pasta com .css's


// configurar caminhos da minha aplicação
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")// AQUI ENVIANDO A PAGINA INDEX, BUSCANDO NO PC
})
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
} )
// página inicial
//ligando o server
server.listen(3000)
