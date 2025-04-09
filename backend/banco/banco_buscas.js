const banco = require("./banco")

//busca por pontos nao visitados
async function pontosNaoVis(id_viagem) {
    let conn = await banco.conecta()
}

//busca por pontos visitados
async function pontosVis(id_viagem) {
    let conn = await banco.conecta()
}

//buscar todas as imagens de uma viagem
async function imgViagem(id_viagem) {
    let conn = await banco.conecta()
}

//buscar viagens que ja acabaram
async function viagensFeitas() {
    let conn = await banco.conecta()
}

//buscar viagens por cidade
async function viagensPorCidade() {
    let conn = await banco.conecta()
}

module.exports = {pontosNaoVis, pontosVis, imgViagem, viagensFeitas, viagensPorCidade}