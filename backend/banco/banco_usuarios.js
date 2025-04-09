const banco = require("./banco")

//editar tuso isso para o banco do mapbox

async function mostraUsuario(usuario){
    let conn = await banco.conecta()
    let sql = "select usuario, id from usuarios where usuario = ?"
    let resposta = await conn.query(sql, [usuario])
    console.log(resposta[0][0]);
  //o retorno tem 2 arrays (um dentro do outro). Queremos o primeiro deles.
    return resposta[0][0]
}

async function mostraUsuarioSenha(usuario){
  let conn = await conecta()
  let sql = "select senha from usuarios where usuario = ?"
  let resposta = await conn.query(sql, [usuario])
  return resposta[0][0].senha
}

async function insereUsuario(usuario, senha){
  let conn = await conecta()
  let sql = "insert into usuarios(usuario, senha) values(?,?)"
  let resp = await conn.query(sql, [usuario, senha])
  console.log(resp[0].affectedRows)
  return resp[0].affectedRows
  /* 
  retorno:
  [
      ResultSetHeader {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 3,
          info: '',
          serverStatus: 2,
          warningStatus: 0,
          changedRows: 0
      },
       undefined
  ]
  */
}

async function deletaUsuario(id) {
  let conn = await conecta()
  let sql = "delete from usuarios where id = ?"
  let resp = await conn.query(sql, [id])
  console.log(resp)
  return resp[0].affectedRows
}

async function alterarSenha(usuario, senha) {
  let conn = await conecta()
  let sql = "update usuarios set senha = ? where usuario = ?"
  let resp = await conn.query(sql, [senha, usuario])
  console.log(resp)
  return resp[0].affectedRows
}

//deleta viagem_usuarios com base no id do usuario

module.exports = {mostraUsuario, mostraUsuarioSenha, insereUsuario, deletaUsuario, alterarSenha}