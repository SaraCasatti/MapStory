const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_pontos")
const banco_rotas_ponto = require("../banco/banco_rotas")
const banco_imagens = require("../banco/banco_imagens")

//pega todos os pontos
router.get("", async(req, res) => {
    let pontos = await banco.pegaPontos()
    return res.status(200).json(viagens)
})

//pega ponto por id viagem
router.get("/:id", async(req, res) => {
    let id = req.params.id
    let ponto = await banco.buscaPontoId(id)
    return res.status(200).json(ponto)
})

//cria pontos
router.post("", async(req, res) => {
    let ponto = req.body
    let resp = await banco.criaPonto(ponto)
    if (resp.affectedRows == 1) {
        return res.status(201).json(resp)
    } else {
        return res.status(400).send("erro")
    }
})

//atualiza pontos - fui e descricao
router.put("/:id", async(req, res) => {
    const id = req.params.id //ver se precisa usar - nos testes 
    let ponto = req.body
    let resp = await banco.atualizaPonto(ponto)
    if(resp){
        return res.status(204).send("ponto atualizada")
    } else {
        return res.status(404).send("erro")
    }
})

//deleta ponto - deletar o rotas-ponto e as imagens
router.delete("/:id", async(req, res) => {
    let id = req.params.id
    let resp = await banco.deletaPonto(id)
    if(resp) {
        return res.status(204).send("ponto deletado da rota")
    } else {
        return res.status(404).send("erro")
    } 
})

module.exports = router;