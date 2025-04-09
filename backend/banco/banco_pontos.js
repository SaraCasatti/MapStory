const banco = require("./banco")

//pega todos os pontos
async function pegaPontos() {
    let conn = await banco.conecta()
}

//pega ponto por id
async function buscaPontoId(id) {
    let conn = await banco.conecta()
}

//cria pontos 
async function criaPonto(ponto) {
    let conn = await banco.conecta()
}

//atualiza pontos - fui e descricao
async function atualizaPonto(ponto) {
    let conn = await banco.conecta()
}

//deleta ponto
async function deletaPonto (id) {
    let conn = await banco.conecta()
}

module.exports = {pegaPontos, buscaPontoId,criaPonto, atualizaPonto, deletaPonto}