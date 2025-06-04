const banco = require("./banco")

//pegar todas as imagens de um ponto
async function pegarImg(id_ponto) {
    let conn = await banco.conecta()
    let sql = "select * from imagens where id_ponto = ?"
    let resp = await conn.query(sql, [id_ponto])
    console.log(resp, id_ponto)
    return resp[0]
}

//adicionar imagem
async function addImagem(img) {
    let conn = await banco.conecta()
    let sql = "insert into imagens(descricao, img, id_ponto) values (?, ?, ?)"
    let resp = await conn.query(sql, [img.descricao, img.img, img.id_ponto])
    return resp[0]
}

//deleta imagem - pelo id da imagem
async function deletaImg(id) {
    let conn = await banco.conecta()
    let sql = "delete from imagens where id = ?"
    let resp = await conn.query(sql, [id])
    return resp[0].affectedRows
}

//deleta imagem - pelo id do ponto (para ajudar quando eu estiver deletando o ponto)
async function deletaImgIdPonto(id) {
    let conn = await banco.conecta()
    let sql = "delete from imagens where id_ponto = ?"
    let resp = await conn.query(sql, [id])
    return resp[0].affectedRows
}

//atualiza imagem - descrição
async function atualizaImg(img) {
    let conn = await banco.conecta()
    let sql = "update imagens set descricao = ? where id = ?"
    let resp = await conn.query(sql, [img.descricao, img.id])
    return resp[0].affectedRows
}

module.exports = {pegarImg, addImagem, deletaImg, atualizaImg, deletaImgIdPonto}