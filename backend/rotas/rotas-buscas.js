const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_buscas")

//busca por pontos nao visistados
router.get("/naoVis", async(req, res) => {
    let pontos = await banco.pontosNaoVis(req.body.id_viagem)
    return res.status(200).json(pontos)
})

//busca por pontos visitados
router.get("/vis", async(req, res) => {
    let pontos = await banco.pontosVis(req.body.id_viagem)
    return res.status(200).json(pontos)
})

//buscar todas as imagens de uma viagem
router.get("/imagemViagem/:id_viagem", async(req, res) => {
    let imagens = await banco.imgViagem(req.params.id_viagem) 
    return res.status(200).json(imagens)
})

//busca viagens por cidade
router.get("/cidade/:cidade", async(req, res) => {
    let cidade = req.params.cidade
    let viagens = await banco.viagensPorCidade(cidade)
    return res.status(200).json(viagens)
})

//pega todos os pontos do usuario
router.get("/pontos/:id_usuario", async (req, res) => {
    let id_usuario = req.params.id_usuario
    let pontos = await banco.pegaTodosPontos(id_usuario)
    return res.status(200).json(pontos)
})

module.exports = router;