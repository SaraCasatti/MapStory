const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_buscas")

//busca por pontos nao visistados
router.get("/naoVis", async(req, res) => {

})

//busca por pontos visitados
router.get("/vis", async(req, res) => {

})

//buscar todas as imagens de uma viagem
router.get("/imagemViagem", async(req, res) => {

})

//busca viagens que ja acabaram (data)
router.get("/viagensFeitas", async(req, res) => {

})

//busca viagens por cidade
router.get("/cidade", async(req, res) => {
    
})


module.exports = router;