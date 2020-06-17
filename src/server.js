const express = require("express")
const server = express()
//configurando uma pasta publica
server.use(express.static("public"))// pasta com .css's

//ultilizando template engine, configurando o nunjucks
const nunjucks = require("nunjucks")//aqui eh tipo instanciar
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
server.get("/", (req, res) => {
    return res.render("index.html", {airton: "aqui mano airton vai dar certo o emprego"})// AQUI ENVIANDO A PAGINA INDEX, BUSCANDO NO PC
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
} )
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})
// página inicial
//ligando o server
server.listen(3000)
