// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criando o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")




/*utilizar o objeto de banco de dados, p nossas aplicaçoes
db.serialize(() => {
    //criar uma tabela com comandos SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS lugares (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            imagem TEXT,
            endereco TEXT,
            endereco2 TEXT,
            state TEXT,
            cidade TEXT,
            items TEXT
        );
    
    
    `)

    //inserir dados na tabela //  aqui vai trocar as interrogaçoes por valores de forma dinamica
    const query = `
        INSERT INTO lugares(
            name,
            imagem,
            endereco,
            endereco2,
            state,
            cidade,
            items
        ) VALUES (?,?,?,?,?,?,?);  
`
    const values = [
        "Colectoria",
        "adelina alario buzzini, jardim antunes",
        "número 1160",
        "São José do Rio Preto",
        "São paulo",
        "Residuos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {//inserir dados
        if (err) {
            return console.log(err)
        }
        console.log("Cadastro feito com Exito")
        console.log(this)
    }
    //db.run(query, values, afterInsertData)

    // deletar um dado da tabela
    db.run(` DELETE FROM lugares WHERE id = ?`, [1], function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("registro apagado com Êxito!!!!!!!!")

        // consultar os dados da tabela
        db.all(` SELECT * FROM lugares`, function (err, rows) {
            if (err) {
                return console.log(err)
            }

            console.log("AQUI APRESENTADO SEU REGISTRO : ")
            console.log(rows)
        })

    })









})*/
