const banco = require("./banco")

//cria nova solicitação 
async function mandaSolicitacao(solicitacao) {
    let conn = await banco.conecta()
    //precisa do id de quem mandou e de quem vai receber => quem receber que deleta (responde)
    //fazer solicitação com o id de quem manda (usuario_1 )e o usuario (2) de quem recebe
    let sql = "insert into solicitacoes(id_usuario1, id_usuario2, id_viagem) values (?, ?, ?)"
    let resp = await conn.query(sql, [solicitacao.id_usuario1, solicitacao.id_usuario2, solicitacao.id_viagem])
    console.log("resp:",resp)
    return resp[0]
}

//deleta solicitação
async function deletaSolicitacao(solicitacao) {
    let conn = await banco.conecta()
    let sql = "insert into solicitacoes(id_usuario1, id_viagem, id_usuario2) select 1 as id_usuario1, 1 as id_viagem, id as id_usuario2 from usuarios where usuario = "sara2";"
    let resp = await conn.query(sql, [solicitacao.id_usuario1, solicitacao.id_usuario2])
    console.log(resp[0])
    return resp[0].affectedRows
}

module.exports = {mandaSolicitacao, deletaSolicitacao}