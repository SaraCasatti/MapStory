const banco = require("./banco")

//pega rota por id
async function buscaPorId(id) {
    let conn = await banco.conecta()
    let sql = "select * from rotas where id = ?"
    let resp = await conn.query(sql, [id])
    return resp[0]
}

//pega todas as rotas da viagem
async function pegaRotas(id_viagem) {
    let conn = await banco.conecta()
    let sql = "select * from rotas where id_viagem = ?"
    let resp = await conn.query(sql, [id_viagem])
    return resp[0]
}

//pega todos os pontos dentro de uma rota
async function pontosRota(id_rota) {
    let conn = await banco.conecta()
    let sql = "select * from rotas_pontos where id = ?"
    let resp = await conn.query(sql, [id_rota])
    return resp[0]
}

//cria rotas
async function criaRota(rota) {
    let conn = await banco.conecta()
    let sql = "insert into rotas(nome, dia, hora, descricao, id_viagem) values (?, ?, ?, ?, ?)"
    let resp = await conn.query(sql, [rota.nome, rota.dia, rota.hora, rota.descricao, rota.id_viagem])
    console.log("resp:",resp)
    return resp[0]
}

//excluir rotas
async function deletaRota(id) {
    let conn = await banco.conecta()
    let sql = "delete from rotas where id = ?"
    let resp = await conn.query(sql, [id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//editar nome, data, hora e descricao da rota
async function editaRota(rota) {
    let conn = await banco.conecta()
    let sql = "update rotas set nome = ?, dia = ?, hora = ?, descricao = ? where id = ?"
    let resp = await conn.query(sql, [rota.nome, rota.dia, rota.hora, rota.descricao, rota.id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//adicionar ponto a rota tabela rotas_pontos
async function addPonto(id_ponto, id_rota) {
    let conn = await banco.conecta()
    let sql = "insert into rotas_pontos(id_rota, id_ponto) values (?, ?)"
    let resp = await conn.query(sql, [id_rota, id_ponto])
    console.log("resp:",resp)
    return resp[0]
}

//deletar ponto da rota (id_rota, id_ponto) na tabela rotas_pontos
async function deletaPonto(id_rota, id_ponto) {
    let conn = await banco.conecta()
    let sql = "delete from rotas_pontos where id_rota = ? and id_ponto = ?"
    let resp = await conn.query(sql, [id_rota, id_ponto])
    console.log(resp[0])
    return resp[0].affectedRows
}

//deletar todos os pontos de uma rota (id_rota) na tabela rotas_pontos
async function deletaPontosRota(id_rota) {
    let conn = await banco.conecta()
    let sql = "delete from rotas_pontos where id_rota = ?"
    let resp = await conn.query(sql, [id_rota])
    console.log(resp[0])
    return resp[0].affectedRows
}

module.exports = {buscaPorId, pegaRotas , pontosRota, criaRota, deletaRota, editaRota, addPonto, deletaPonto, deletaPontosRota}