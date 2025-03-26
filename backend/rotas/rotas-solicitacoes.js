const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_usuarios")

router.post("", async (req, res) => {
    //fazer solicitação
})

router.delete("/:id", async(req, res) => {
    //deleta a solicitação apenas quando ela é respondida
})

module.exports = router;