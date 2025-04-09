const banco = require("./banco")

//pegar todas as imagens de um ponto
async function pegarImg(id_ponto) {
    let conn = await banco.conecta()
}

//adicionar imagem
async function addImagem(img) {
    let conn = await banco.conecta()
}

//deleta imagem
async function deletaImg(id) {
    let conn = await banco.conecta()
}

//atualiza imagem - descrição
async function atualizaImg(id, desc) {
    let conn = await banco.conecta()
}

module.exports = {pegarImg, addImagem, deletaImg, atualizaImg}