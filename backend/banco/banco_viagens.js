const banco = require("./banco")

//pega todas as viagens - de um usuario 
async function viagens(id_usuario) {
    let conn = await banco.conecta()
    let sql = "select * from viagens where id in (select id_viagem from usuario_viagem where id_usuario = ?)"
    let resp = await conn.query(sql, [id_usuario])
    console.log(resp[0])
    return resp[0]
}

//pega viagem por id
async function viagensId(id) {
    let conn = await banco.conecta()
    let sql= "select * from viagens where id = ?"
    let resp = await conn.query(sql, [id])
    return resp[0]
}

//cria viagem
async function criaViagem(viagem) {
    let conn = await banco.conecta()
    let sql = "insert into viagens(cidade, dia_inicio, dia_fim, descricao) values (?, ?, ?, ?)"
    let resp = await conn.query(sql, [viagem.cidade, viagem.dia_inicio, viagem.dia_fim, viagem.descricao])
    console.log("resp criaViagem: ",resp)
    return resp[0]
}

//adiciona usuario a viagem
async function addUsuarioViagem(id_viagem, id_usuario) {
    //usuario_viagem (tabela)
    let conn = await banco.conecta()
    let sql = "insert into usuario_viagem(id_usuario, id_viagem) values(?,?)"
    let resp = await conn.query(sql, [id_usuario, id_viagem])
    console.log("resp addUsuarioViagem: ",resp)
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
    let sql = "update viagens set dia_inicio = ?, dia_fim = ?, descricao = ? where id = ?"
    let resp = await conn.query(sql, [viagem.dia_inicio, viagem.dia_fim, viagem.descricao, viagem.id])
    console.log(resp[0])
    return resp[0].affectedRows
}

//deleta usuario viagem com o id da viagem 
async function deletaUsuarioViagemIdViagem(id_viagem) {
    let conn = await banco.conecta()
    let sql = "delete from usuario_viagem where id_viagem = ?"
    let resp = await conn.query(sql, [id_viagem])
    console.log(resp)
    return resp[0]
}

//deleta usuario da viagem com o id do usuario e o id da viagem
async function deletaUsuarioDaViagem(id_viagem, id_usuario) {
    let conn = await banco.conecta()
    let sql = "delete from usuario_viagem where id_viagem = ? and id_usuario = ?"
    let resp = await conn.query(sql, [id_viagem, id_usuario])
    console.log(resp)
    return resp[0]
}

module.exports = {deletaUsuarioDaViagem, deletaUsuarioViagemIdViagem, viagens, viagensId,criaViagem, addUsuarioViagem, deletaViagem, atualizaViagem}
