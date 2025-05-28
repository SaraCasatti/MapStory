const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_solicitacoes")
const banco_viagens = require("../banco/banco_viagens")

//pegar solicitacao enviadas
router.get("/enviadas/:id_usuario1", async (req, res) => {
    let id_usuario1 = req.params.id_usuario1
    let resp = await banco.pegaSolicitacoesEnviadas(id_usuario1)
    return res.status(201).json(resp)
})

//pegar solicitacoes recebidas
router.get("/recebidas/:id_usuario2", async (req, res) => {
    let id_usuario2 = req.params.id_usuario2
    let resp = await banco.pegaSolicitacoesRecebidas(id_usuario2)
    return res.status(201).json(resp)
})

router.post("", async (req, res) => {
    //fazer solicitação com o id de quem manda (usuario_1 )e o usuario (2) de quem recebe
    let solicitacao = req.body
    let resp = await banco.mandaSolicitacao(solicitacao)
    if (resp.affectedRows == 1) {
        return res.status(201).send("solicitacao enviada")
    } else {
        return res.status(400).send("erro")
    }
})

router.delete("/:id_usuario1/:nome_usuario2", async(req, res) => {
    //deleta a solicitação pelo id de quem mandou 
    let id_usuario1 = req.params.id_usuario1
    let nome_usuario2 = req.params.nome_usuario2
    let resp = await banco.deletaSolicitacaoEnviada(id_usuario1, nome_usuario2)
    if(resp) {
        return res.status(204).send("solicitacao deletada")
    } else {
        return res.status(404).send("erro")
    } 
})

//responder solicitação 
// resp como true ou false no front

// (add = true, del = false)
router.post("/responder/:resp", async(req, res) => {
    //resp é se o usuario aceitou ou nao a solicitacao
    //se sim - adiciona usuario a viagem (banco_viagens) e deleta a solicitação
    //se nao - so deleta
    let resp = req.params.resp
    let solicitacao = req.body
    console.log("resp:", resp)
    if (resp === 1) {
        console.log("resp: depois do if", resp)
        let addUsuario = await banco_viagens.addUsuarioViagem(solicitacao.id_viagem, solicitacao.id_usuario2)
        if(addUsuario.affectedRows == 1) {
            console.log("usuario adicionado na viagem")
        } else {
            return res.status(400).send("usuario nao pode ser adicionado")
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