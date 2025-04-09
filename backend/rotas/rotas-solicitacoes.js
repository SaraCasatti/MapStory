const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_solicitacoes")
const banco_viagens = require("../banco/banco_viagens")

router.post("", async (req, res) => {
    //fazer solicitação
})

router.delete("/:id", async(req, res) => {
    //deleta a solicitação apenas quando ela é respondida
})

//responder solicitação 
router.post("/responder/:resp", async(req, res) => {
    //resp é se o usuario aceitou ou nao a solicitacao
    //se sim - adiciona usuario a viagem (banco_viagens) e deleta a solicitação
    //se nao - so deleta
})

module.exports = router;