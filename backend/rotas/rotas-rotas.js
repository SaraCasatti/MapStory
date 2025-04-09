const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_rotas")

//pega rota por id
router.get("/:id", async (req, res) => {

})

//pega todas as rotas
router.get("", async (req, res) => {
    
})

//pega os pontos que estao dentro da rota por id da rota 
router.get("/ponto/:id_rota", async (req, res) => {
    
})

//criar rotas (rotas)
router.post("", async(req, res) => {

})

//excluir rotas (excluir da rotas_ponto e depois da rotas)
router.delete("/:id", async(req, res) => {
    
})

//editar rotas
//editar info da rota
router.put("/:id", async(req, res) => {
    //pode editar o nome, o dia, a hora e a descricao
})

//adicionar pontos (rotas_ponto)
router.post("/addPonto/:id_rota/:id_ponto", async(req, res) => {

})

//deletar pontos(rotas_ponto)
router.delete("/deletaPonto/:id_rota/:id_ponto", async(req, res) => {
    
})

module.exports = router;