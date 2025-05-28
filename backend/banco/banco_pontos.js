const banco = require("./banco")



//pega ponto por id_viagem
async function buscaPontoId(id) {
    let conn = await banco.conecta()
    let sql = "select * from pontos where id_viagem = ?"
    let resp = await conn.query(sql, [id])
    return resp[0]
}

//cria pontos 
async function criaPonto(ponto) {
    let conn = await banco.conecta()
    let sql = "insert into pontos(latitude, longitude, fui, descricao, id_viagem) values (?, ?, ?, ?, ?)"
    let resp = await conn.query(sql, [ponto.latitude, ponto.longitude, ponto.fui, ponto.descricao, ponto.id_viagem])
    console.log("resp:",resp)
    return resp[0]
}

//atualiza pontos - fui e descricao
async function atualizaPonto(ponto) {
    let conn = await banco.conecta()
    let sql = "update pontos set fui = ?, descricao = ? where id = ?"
    let resp = await conn.query(sql, [ponto.fui, ponto.descricao, ponto.id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//deleta ponto
async function deletaPonto (id) {
    let conn = await banco.conecta()
    let sql = "delete from pontos where id = ?"
    let resp = await conn.query(sql, [id])
    console.log(resp[0])
    return resp[0].affectedRows
}

module.exports = {buscaPontoId,criaPonto, atualizaPonto, deletaPonto}
