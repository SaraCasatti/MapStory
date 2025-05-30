const express = require("express")
const router = express.Router()
const banco = require("../banco/banco_usuarios")

router.get("/:usuario", async (req, res) => {
    //ve se o usuario existe
    const usuario = req.params.usuario
    let resp = await banco.mostraUsuario(usuario)
    console.log(resp)
    if(resp.length > 0) {
        return res.status(200).json(resp)
    } else {
        return res.status(404).send("usuario inexistente")
    }
})

router.get("/checar/:usuario/:senha", async (req, res) => {
    //loga o usuario - depois de checar se ele existe
    const usuario = req.params.usuario
    const senha = req.params.senha
    let senhaOficial = await banco.mostraUsuarioSenha(usuario)
    console.log(senha, senhaOficial)
    if (senha === senhaOficial) {
        console.log("entrei")
        return res.status(200).send("usuario logado")
    } 
    return res.status(400).send("senha ou usuario errado")
    
})

router.post("", async (req, res) => {
    //cadastra o usuario
    const usuario = req.body.usuario
    const senha = req.body.senha
    //ver se precisa colocar silicitacoes aqui
    let resp = await banco.insereUsuario(usuario, senha)
    if(resp) {
        return res.status(201).send("usuario adicionado")
    } else {
        return res.status(400).send("erro")
    }
})

router.delete("/:id", async (req, res) => {
    //deleta o usuario - tambem vai presisar deletar as viagens do usuario
    const id = req.params.id
    resp = await banco.deletaUsuario(id)
    if(resp == 1) {
        return res.status(204).send("usuario deletado")
    } else {
        return res.status(404).send("erro")
    }
})

router.put("/:usuario", async (req, res) => {
    //pode atualizar a senha
    const usuario = req.params.usuario
    const senha = req.body.senha
    resp = await banco.alterarSenha(usuario, senha)
    if(resp == 1){
        return res.status(204).send("senha alterada")
    } else {
        return res.status(404).send("erro")
    }
})

module.exports = router;