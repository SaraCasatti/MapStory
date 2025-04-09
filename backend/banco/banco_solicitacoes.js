const banco = require("./banco")

//cria nova solicitação 
async function mandaSolicitacao(solicitacao) {
    let conn = await banco.conecta()
    //precisa do id de quem mandou e de quem vai receber => quem receber que deleta (responde)
}

//deleta solicitação
async function deletaSolicitacao(id) {
    let conn = await banco.conecta()
}

module.exports = {mandaSolicitacao, deletaSolicitacao}