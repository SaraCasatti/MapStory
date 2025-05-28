const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_imagens")

//pegar todas as de um ponto imagem - ta qui pq é tipo a default
router.get("", async(req, res) => {
    let imagens = await banco.pegarImg(req.body.id_ponto)
    return res.status(200).json(imagens)
})

//adiciona imagem
router.post("", async(req, res) => {
    let img = req.body
    let resp = await banco.addImagem(img)
    if (resp.affectedRows == 1) {
        return res.status(201).json(resp)
    } else {
        return res.status(400).send("erro")
    }
})

//deleta imagem
router.delete("/:id", async(req, res) => {
    let id = req.params.id
    let resp = await banco.deletaImg(id)
    if(resp) {
        return res.status(204).send("imagem deletada")
    } else {
        return res.status(404).send("erro")
    } 
})

//atualizar imagem - descricao
router.put("/:id", async(req, res) => {
    let id = req.params.id //ver se precisa usar - nos testes 
    let img = req.body
    let resp = await banco.atualizaImg(img)
    console.log(resp)
    if(resp) {
        return res.status(204).send("descrição da imagem atualizada")
    } else {
        return res.status(404).send("erro")
    } 
})

// de inicio so isso ta bom - para o futuro talvez fosse legal ter como tirar foto dentro do proprio app mas pode ser muita loucura

module.exports = router;