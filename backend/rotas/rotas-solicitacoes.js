const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_solicitacoes")
const banco_viagens = require("../banco/banco_viagens")

router.post("", async (req, res) => {
    //fazer solicitação com o id de quem manda (usuario_1 )e o usuario (2) de quem recebe
    let solicitacao = req.body
    let resp = await banco.mandaSolicitacao(solicitacao)
    if (resp.affectedRows == 1) {
        return res.status(201).json(resp)
    } else {
        return res.status(400).send("erro")
    }
})

router.delete("/:id", async(req, res) => {
    //deleta a solicitação apenas quando ela é respondida
    let id = req.params.id
    let resp = await banco.deletaSolicitacao(id)
    if(resp) {
        return res.status(204).send("solicitacao deletada")
    } else {
        return res.status(404).send("erro")
    } 
})

//responder solicitação 
// resp como true ou false no front
// o tipo de solicitacao pode ser para adicionar ou tirar alguem da viagem 
// (add = true, del = false)
router.post("/responder/:tipo/:resp", async(req, res) => {
    //resp é se o usuario aceitou ou nao a solicitacao
    //se sim - adiciona usuario a viagem (banco_viagens) e deleta a solicitação
    //se nao - so deleta
    let tipo = req.params.tipo
    let resp = req.params.resp
    let solicitacao = req.body
    if(tipo) {
        if (resp) {
            let addUsuario = await banco_viagens.addUsuarioViagem(solicitacao.id_viagem, solicitacao.id_usuario)
            if(addUsuario) {
                console.log("usuario adicionado na viagem")
            } else {
                return res.status(400).send("usuario nao pode ser adicionado")
            }
        } 
    } else {
        if (resp) {
            let delUsuario = await banco_viagens.deletaUsuarioDaViagem(solicitacao.id_viagem, solicitacao.id_usuario)
            if(delUsuario) {
                console.log("usuario removido da viagem")
            } else {
                return res.status(400).send("usuario nao pode ser deletado da viagem")
            }
        } 
    }

    let delSolicitacao = await banco.deletaSolicitacao(solicitacao)
    if(delSolicitacao) {
        return res.status(204).send("solicitacao respondida")
    } else {
        return res.status(404).send("erro ao deletar solicitacao")
    } 
})

module.exports = router;