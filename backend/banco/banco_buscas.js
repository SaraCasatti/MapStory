const banco = require("./banco")

//busca por pontos nao visitados
async function pontosNaoVis(id_viagem) {
    let conn = await banco.conecta()
    let sql = "select * from pontos where fui = ? and id_viagem = ?"
    let resp = await conn.query(sql, [0, id_viagem])
    return resp[0]
}

//busca por pontos visitados
async function pontosVis(id_viagem) {
    let conn = await banco.conecta()
    let sql = "select * from pontos where fui = ? and id_viagem = ?"
    let resp = await conn.query(sql, [1, id_viagem])
    return resp[0]
}

//buscar todas as imagens de uma viagem
async function imgViagem(id_viagem) {
    let conn = await banco.conecta()
    let sql = "select * from imagens where id_ponto in (select id from pontos where id_viagem = ?)"
    let resp = await conn.query(sql, [id_viagem])
    return resp[0]
}

//buscar viagens por cidade
async function viagensPorCidade(cidade) {
    let conn = await banco.conecta()
    let sql = "select * from viagens where cidade = ?"
    let resp = await conn.query(sql, [cidade])
    return resp[0]
}

//pegar todos os pontos de um usuario
async function pegaTodosPontos(id_usuario) {
    let conn = await banco.conecta()
    let sql = "select * from pontos where id_viagem in (select id_viagem from usuario_viagem where id_usuario = ?)"
    let resp = await conn.query(sql, [id_usuario])
    return resp[0]
}

module.exports = {pontosNaoVis, pontosVis, imgViagem, viagensPorCidade, pegaTodosPontos}