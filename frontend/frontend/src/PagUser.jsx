import { useState } from 'react';

function PagUser(props) {
    //o que o usuario pode fazer:

    //criar viagem
    //minhas viagens => alterar / deletar ...
    //em viagem tem que colocar o convidar amigo (solicitações)

    //estado viagem => quero fazer coisa com viagens ou com o usuario?
    const [viagem, setViagem] = useState(false)
    //se true => minhas(true) ou nova(false)
    const [v, setV] = useState('')


    //deslogar
    //deletar usuario
    //alterar usuario
    const [alteraUser, setAlteraUser] = useState()

    const usuario = props.usuario
    const id = props.id

    const setLogado = props.setLogado

    function sair() {
        props.setUsuario("")
        props.setId("")
        props.setForms(false)
        setLogado(false)
    }

    function altera() {
        //forms
        setAlteraUser(
            <AlteraUser
                id={id}
                usuario={usuario}
                setAlteraUser={setAlteraUser}
            />
        )
    }

    async function deleta(event) {
        let options = {
            method: "DELETE",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        let resp = await fetch(`http://localhost:8001/usuarios/${id}`, options)
        console.log(resp)
        if (resp.status == 204) {
            window.alert("usuario deletado")
            sair()
        }
    }

    function minhas() {
        setViagem(true)
        setV(true)
    }

    function novas() {
        setViagem(true)
        setV(false)
    }


    return (<>

        {viagem ?
            (
            v ?
            <h1>minhas</h1> :
            <h1>novas</h1>
            ):
            <div className="content">

                <div className="content bUsuario">
                    <button onClick={minhas} className="button" style={{ backgroundColor: 'rgba(230, 238, 243, 1)', color: 'black' }}>Minhas Viagens</button>
                    <button onClick={novas} className="button" style={{ backgroundColor: 'rgba(230, 238, 243, 1)', color: 'black' }}>Nova Viagem</button>
                </div>

                <div className="content bUsuario">
                    <button onClick={sair} className="button is-warning">Sair</button>
                    <button onClick={altera} className="button is-warning">Alterar conta</button>
                    {alteraUser}
                    <button onClick={deleta} className="button is-danger">Deletar Usuario</button>
                </div>
            </div>

        }


    </>)
}

function AlteraUser(props) {
    //altera so a senha

    const [user, setUser] = useState({
        id: props.id,
        usuario: props.usuario,
        senha: ""
    })

    function trataAlteracao(event) {
        let novoUser = { ...user, [event.target.name]: event.target.value }
        setUser(novoUser)
    }

    async function atualiza(event) {
        event.preventDefault()
        let options = {
            method: "PUT",
            body: JSON.stringify({
                senha: user.senha
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        let resp = await fetch(`http://localhost:8001/usuarios/${user.usuario}`, options)
        console.log(resp)
        if (resp.status == 204) {
            window.alert("senha atualizada")
            voltar()
        } else {
            wintdow.aler("erro")
            voltar()
        }
    }

    function voltar() {
        props.setAlteraUser("")
    }

    return (<>
        <div className="card" style={{ backgroundColor: ' rgba(230, 238, 243, 1)', color: 'black' }}>
            <header className="card-header">
                <p className="card-header-title" style={{ fontWeight: 'bold', color: 'black' }}>Alterar Senha</p>

                <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>

            <div className="card-content">
                <form onSubmit={atualiza}>
                    <div className="field">

                        <label className="label" style={{ color: 'black', fontWeight: 'normal' }}>Senha: </label>
                        <div className="control">
                            <input className="input" id="senha" type="password" name="senha" value={user.senha} onChange={trataAlteracao} style={{ backgroundColor: ' rgba(255, 255, 255, 1)', color: 'black' }} />
                        </div>

                        <div className='contron' style={{ margin: '1rem' }}>
                            <input type="submit" value="Submit" className='button is-success' />
                            <button onClick={voltar} className="button is-warning mx-1">Voltar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default PagUser