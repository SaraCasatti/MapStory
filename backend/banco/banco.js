const bd = require("mysql2/promise")

async function conecta() {
    const conexao = await bd.createConnection({
        host: "localhost",
        port: 3306,
        database: "MapStory",
        user:"root",
        password:"xxxx"
    })
    return conexao
}

//macanica de delets 

//deleta viagem - deletar os pontos da viagem - deletar os usuarios_viagem 
//e as solicitações e as rotas e rotas ponto

//para deletar o ponto - banco pontos - deleta rotas_ponto com aquele ponte e imagem ligada com aquele ponto
//para deletar a rota - banco rotas - deleta rotas_ponto onde tem aquela rota
//para deletar as solicitações - banco solicitacoes - deleta direto 
//para deletar os usuario_viagem - banco -  deleta direto

//buscas
module.exports = {conecta}
