const banco = require("./banco")

//cria nova solicitação 
async function mandaSolicitacao(solicitacao) {
    let conn = await banco.conecta()
    //precisa do id de quem mandou e de quem vai receber => quem receber que deleta (responde)
    //fazer solicitação com o id de quem manda (usuario_1 )e o usuario (2) de quem recebe
    let sql = "insert into solicitacoes(id_usuario1, id_viagem, id_usuario2) select ? as id_usuario1, ? as id_viagem, id as id_usuario2 from usuarios where usuario = ?"
    let resp = await conn.query(sql, [solicitacao.id_usuario1, solicitacao.id_viagem, solicitacao.nome_usuario2])
    console.log("resp:",resp)
    return resp[0]
}

//deleta solicitação
async function deletaSolicitacao(solicitacao) {
    let conn = await banco.conecta()
    let sql = "delete from solicitacao where id_usuario1 = ? or id_usuario2 = ?"
    let resp = await conn.query(sql, [solicitacao.id_usuario1, solicitacao.id_usuario2])
    console.log(resp[0])
    return resp[0].affectedRows
}

//pega solicitacoes enviadas
async function pegaSolicitacoesEnviadas(id_usuario1) {
    let conn = await banco.conecta()
    let sql = "select * from solicitacoes where id_usuario1 = ?"
    let resp = await conn.query(sql, [id_usuario1])
    return resp[0];
}

//pega solicitacoes recebidas
async function pegaSolicitacoesRecebidas(id_usuario2) {
    let conn = await banco.conecta()
    let sql = "select * from solicitacoes where id_usuario2 = ?"
    let resp = await conn.query(sql, [id_usuario2])
    return resp[1]
}

module.exports = {mandaSolicitacao, deletaSolicitacao, pegaSolicitacoesEnviadas, pegaSolicitacoesRecebidas}