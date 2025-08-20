import { useState } from 'react';

function User(props) {
    //retorna duas coisas
    //se nao tiver cadastrado ou login: pg com os botoes
    //se tiver clicado ir para o forms

    let usuario = props.usuario
    let setUsuario = props.setUsuario
    let id = props.id
    let setId = props.setId

    const[forms, setForms] = useState(false);
    const[tipoForms, setTipoForms] = useState(false);
    //false - cadastro / true - loga

    function loga() {
        setForms(true)
        setTipoForms(true)
    }

    function cadastra() {
        setForms(true)
        setTipoForms(false)
    }

    return (<>

        <div className="card  " style={{backgroundColor: ' rgba(255, 255, 255, 1)', border: '1px solid rgb(195, 204, 213)'}}>
        <header className="card-header">
            <p className="card-header-title" style={{color: 'black'}}> Usuário: {usuario}</p>
            <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div className="card-content">
            {forms?
            <FazForm tipo={tipoForms} setForms = {setForms} usuario={usuario} setUsuario={setUsuario} setId = {setId}/> :
            <div className="content bUsuario" style={{color: 'black'}}>
                <button onClick={cadastra} className="button " style={{backgroundColor: 'rgba(230, 238, 243, 1)', color: 'black'}}>Cadastrar</button>
                <button onClick= {loga} className="button" style={{backgroundColor: 'rgba(230, 238, 243, 1)', color: 'black'}}>Login</button>
            </div>
            }
        </div>
        </div>
    </>)

}

function FazForm(props) {
    //formulario de cadastro ou login
    //usuario tem: usuario e senha
    const setUsuario = props.setUsuario
    const setId = props.setId

    const tipo = props.tipo
    //false - cadastro / true - loga
    const [user, setUser] = useState({
        usuario: "",
        senha: ""
    })

    function trataAlteracao(event) {
        let novoUser = {...user, [event.target.name]: event.target.value}
        setUser(novoUser)
    }

    function voltar() {
        props.setForms(false)
    }

    function submit(event) {
        event.preventDefault()
        if(tipo) {
            return login()
        } else  {
            return cadastro()
        }
    }
    
    async function login(event) {
        console.log("login") 
        let resp = await fetch(`http://localhost:8001/usuarios/${user.usuario}`)
        if(resp.status == 404) {
            window.alert("Usuário inexistente, faça o cadastro")
            voltar()
        } else {
            let usu = await resp.json()
            let resp2 = await fetch(`http://localhost:8001/usuarios/checar/${user.usuario}/${user.senha}`)
            if(resp2.status == 200 ) {
                console.log("logado")
                setUsuario(usu.usuario)
                setId(usu.id)
                console.log(usu[0].usuario, " e ", usu[0].id)
                console.log(usu)
            } else {
                window.alert("senha errada")
                voltar()
            }
        }
    }

    async function cadastro(event) {
        console.log("cadastro")
    }

    return(<>
        <div className ="card" style={{backgroundColor: ' rgba(230, 238, 243, 1)', color: 'black'}}>
           
            <header className="card-header">
            {tipo ? <p className="card-header-title" style={{fontWeight: 'bold', color:'black'}}>Login:</p> : <p className="card-header-title" style={{fontWeight: 'bold', color:'black'}}>Cadastro:</p>}
            
            <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
         </header>

            <div className="card-content">
            <form onSubmit={submit}>
            <div className ="field">
                <label className ="label" style={{ color: 'black', fontWeight: 'normal'}}>Usuário: </label>
                <div className ="control" >
                    <input className ="input" id = "usuario" name = "usuario" value={user.usuario} onChange={trataAlteracao} style={{backgroundColor: ' rgba(255, 255, 255, 1)', color: 'black'}}/>
                </div>
        
                <label className ="label" style={{ color: 'black', fontWeight: 'normal'}}>Senha: </label>
                <div className ="control">
                    <input className ="input" id = "senha" type = "password" name = "senha" value={user.senha} onChange={trataAlteracao} style={{backgroundColor: ' rgba(255, 255, 255, 1)', color: 'black'}}/>
                </div>
                
                <div className='contron' style={{margin: '1rem'}}>
                    <input type="submit" value="Submit" className='button is-success'/>
                    <button onClick = {voltar} className ="button is-warning mx-1">Voltar</button>
                </div>
            </div>
            </form>
            </div>
        </div>
    </>)
}

export default User