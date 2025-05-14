const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_rotas")

//pega rota por id
router.get("/:id", async (req, res) => {
    let id = req.params.id
    let viagem = await banco.buscaPorId(id)
    return res.status(200).json(viagem)
})

//pega todas as rotas da viagem
router.get("/viagem/:id_viagem", async (req, res) => {
    let viagens = await banco.pegaRotas(req.params.id_viagem)
    return res.status(200).json(viagens)
})

//pega os pontos que estao dentro da rota por id da rota 
router.get("/ponto/:id_rota", async (req, res) => {
    let id_rota = req.params.id_rota
    let pontos = await banco.pontosRota(id_rota)
    return res.status(200).json(pontos)
})

//criar rotas (rotas)
router.post("", async(req, res) => {
    let rota = req.body
    let resp = await banco.criaRota(rota)
    if (resp.affectedRows == 1) {
        return res.status(201).json(resp)
    } else {
        return res.status(400).send("erro")
    }
})

//excluir rotas (excluir da rotas_ponto e depois da rotas)
router.delete("/:id", async(req, res) => {
    let id = req.params.id
    let delRotasPontos = await banco.deletaPontosRota(id)
    if(delRotasPontos) {
        let resp = await banco.deletaRota(id)
        if(resp) {
            return res.status(204).send("rota deletada")
        } else {
            return res.status(404).send("erro")
        }
    } else {
        return res.status(404).send("erro ao deletar pontos da rota")
    }
})

//editar rotas
//editar info da rota
router.put("/:id", async(req, res) => {
    //pode editar o nome, o dia, a hora e a descricao
    const id = req.params.id //ver se precisa usar - nos testes 
    let rota = req.body
    let resp = await banco.editaRota(rota)
    if(resp){
        return res.status(201).send("rota atualizada")
    } else {
        return res.status(404).send("erro")
    }
})

//adicionar pontos (rotas_ponto)
router.post("/addPonto/:id_rota/:id_ponto", async(req, res) => {
    let id_rota = req.params.id_rota
    let id_ponto = req.params.id_ponto
    let resp = await banco.addPonto(id_ponto, id_rota)
    if (resp.affectedRows == 1) {
        return res.status(201).json(resp)
    } else {
        return res.status(400).send("erro")
    }
})

//deletar pontos(rotas_ponto)
router.delete("/deletaPonto/:id_rota/:id_ponto", async(req, res) => {
    let id_rota = req.params.id_rota
    let id_ponto = req.params.id_ponto
    let resp = await banco.deletaPonto(id_rota, id_ponto)
    if(resp) {
        return res.status(204).send("ponto deletado da rota")
    } else {
        return res.status(404).send("erro")
    }    
})

module.exports = router;