const banco = require("./banco")

//pega todas as viagens
async function viagens() {
    let conn = await banco.conecta()
    let sql = "select * from viagens"
    let resp = await conn.query(sql)
    console.log(resp[0])
    return resp[0]
}

//pega viagem por id
async function viagensId(id) {
    let conn = await banco.conecta()
    let sql= "select * from viagens where id = ?"
    let resp = await conn.query(sql, [id])
}

//cria viagem
async function criaViagem(viagem) {
    let conn = await banco.conecta()
    let sql = "insert into viagens(cidade, dia_inicio, dia_fim, descricao) values (?, ?, ?, ?)"
    let resp = await conn.query(sql, [viagem.cidade, viagem.dia_inicio, viagem.dia_fim, viagem.descricao])
    console.log("resp:",resp)
    return resp[0]
}

//adiciona usuario a viagem
async function addUsuarioViagem(id_viagem, id_usuario) {
    //usuario_viagem (tabela)
    let conn = await banco.conecta()
    let sql = "insert into usuario_viagem(id_usuario, id_viagem) values (?, ?)"
    let resp = await conn.query(sql, [id_usuario, id_viagem])
    console.log(resp)
    return resp[0]
}

//deleta viagem
async function deletaViagem(id) {
    let conn = await banco.conecta()
    let sql = "delete from viagens where id = ?"
    let resp = await conn.query(sql, [id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//atualiza viagem - data inicio, data fim e descricao
async function atualizaViagem(viagem) {
    let conn = await banco.conecta()
    let sql = "update viagens set data_inicio = ?, data_fim = ?, descricao = ? where id = ?"
    let resp = await conn.query(sql, [viagem.data_inicio, viagem.data_fim, viagem.descricao, viagem.id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//deleta usuario viagem com o id da viagem 
async function deletaUsuarioViagem(id_viagem) {
    let conn = await banco.conecta()
    let sql = "delete from usuario_viagem where id_viagem = ?"
    let resp = await conn.query(sql, [id_viagem])
}

module.exports = {viagens, viagensId,criaViagem, addUsuarioViagem, deletaViagem, atualizaViagem, deletaUsuarioViagem}
