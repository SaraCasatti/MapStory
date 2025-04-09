const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_pontos")
const banco_rotas_ponto = require("../banco/banco_rotas")
const banco_imagens = require("../banco/banco_imagens")

//pega todos os pontos
router.get("", async(req, res) => {
    let resp 
})

//pega ponto por id
router.get("/:id", async(req, res) => {
    
})

//cria pontos
router.post("", async(req, res) => {

})

//atualiza pontos - fui e descricao
router.put("/:id", async(req, res) => {

})

//deleta ponto - deletar o rotas-ponto e as imagens
router.delete("/:id", async(req, res) => {
    
})

module.exports = router;