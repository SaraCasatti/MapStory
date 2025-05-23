const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_viagens")
const banco_solicitacoes = require("../banco/banco_solicitacoes")
const banco_rotas = require("../banco/banco_rotas")

//pega todas as viagens de um usuario
router.get("/usuario/:id_usuario", async(req, res) => {
    let viagens = await banco.viagens(req.params.id_usuario)
    return res.status(200).json(viagens)
})

//pega viagem por id
router.get("/:id", async(req, res) => {
    let id = req.params.id
    let viagem = await banco.viagensId(id)
    return res.status(200).json(viagem)
})

//cria viagem e ja adiciona o usuario a viagem
router.post("/:id_usuario", async(req, res) => {
    let viagem = req.body
    let resp = await banco.criaViagem(viagem)
    if (resp.affectedRows == 1) {
        let resp2 = await banco.addUsuarioViagem(resp.insertId, req.params.id_usuario)
        if(resp2.affectedRows == 1) {
            return res.status(201).send("viagem criada")
        }
    } else {
        return res.status(400).send("erro")
    }
})

router.delete("/:id", async(req, res) => {
//ver certinho na hora de implementar
    let id = req.params.id
    let delUserViagem = await banco.deletaUsuarioViagemIdViagem(id)
    if(delUserViagem) {
        let resp = await banco.deletaViagem(id)
        if(resp) {
            return res.status(201).send("viagem deletada")
        } else {
            return res.status(404).send("erro")
        }
    } else {
        return res.status(404).send("erro ao deletar conexao usuario viagem")
    }
})

//atualiza viagem - data inicio, data fim e descricao
router.put("/:id", async(req,res) => {
    const id = req.params.id //ver se precisa usar - nos testes 
    let viagem = req.body
    let resp = await banco.atualizaViagem(viagem)
    if(resp){
        return res.status(204).send("viagem atualizada")
    } else {
        return res.status(404).send("erro")
    }
})


module.exports = router;