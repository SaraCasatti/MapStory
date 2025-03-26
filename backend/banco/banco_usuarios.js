const banco = require("./banco")

async function mostraUsuario(usuario){
    let conn = await banco.conecta()
    let sql = "select usuario, id from usuarios where usuario = ?"
    let resposta = await conn.query(sql, [usuario])
    console.log(resposta[0][0]);
  //o retorno tem 2 arrays (um dentro do outro). Queremos o primeiro deles.
    return resposta[0][0]
}

module.exports = {mostraUsuario}