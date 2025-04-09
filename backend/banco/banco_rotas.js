const banco = require("./banco")

//pega rota por id
async function buscaPorId(id) {
    let conn = await banco.conecta()
}

//pega todas as rotas
async function pegaRotas() {
    let conn = await banco.conecta()
}

//pega todos os pontos dentro de uma rota
async function pontosRota(id_rota) {
    let conn = await banco.conecta()
}

//cria rotas
async function criaRota(rota) {
    let conn = await banco.conecta()
}

//excluir rotas
async function deletaRota(id) {
    let conn = await banco.conecta()
}

//editar nome, data, hora e descricao da rota
async function editaRota(rota) {
    let conn = await banco.conecta()
}

//adicionar ponto a rota tabela rotas_pontos
async function addPonto(id_ponto, id_rota) {
    let conn = await banco.conecta()
}

//deletar ponto da rota (id_rota, id_ponto) na tabela rotas_pontos
async function deletaPonto(id_rota, id_ponto) {
    let conn = await banco.conecta()
}

//deletar todos os pontos de uma rota (id_rota) na tabela rotas_pontos
async function deletaPontosRota(id_rota) {
    let conn = await banco.conecta()
}

module.exports = {buscaPorId, pegaRotas , pontosRota, criaRota, deletaRota, editaRota, addPonto, deletaPonto, deletaPontosRota}