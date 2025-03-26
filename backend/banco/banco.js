const bd = require("mysql2/promise")

async function conecta() {
    const conexao = await bd.createConnection({
        host: "localhost",
        port: 3306,
        database: "MapStory",
        user:"root",
        password:"Nhonhoemartemi6!"
    })
    return conexao
}


//buscas
module.exports = {conecta}