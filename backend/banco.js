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

//usuarios - amizades e viagens juntos

//viagens

//pontos

//rotas

//buscas
module.exports = {}