const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_imagens")

//pegar todas as de um ponto imagem - ta qui pq é tipo a default
router.get("", async(req, res) => {

})

//adiciona imagem
router.post("", async(req, res) => {

})

//deleta imagem
router.delete("/:id", async(req, res) => {

})

//atualizar imagem - descricao
router.delete("/:id", async(req, res) => {

})

// de inicio so isso ta bom - para o futuro talvez fosse legal ter como tirar foto dentro do proprio app mas pode ser muita loucura

module.exports = router;