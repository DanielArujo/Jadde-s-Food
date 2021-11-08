
import Container from "./styled"
import Rodape from "../../components/comum/rodape"
import { Link } from "react-router-dom"
import Api  from "../../service/api"
import { useState } from "react";

const api = new Api();


export default function Create(){

const [ nome, setNome ] = useState('');
const [ telefone, setTelefone ] = useState('');
const [ email, setEmail ] = useState('');
const [ senha, setSenha ] = useState('');
const [ endereco, setEndereco ] = useState('');
const [ numeroEndereco, setNumeroEndereco ] = useState();
const [ complemento ] = useState('');


async function cadastrar(){
    await api.insertUsu(nome, telefone, email, senha, endereco, numeroEndereco, complemento)

}


    return(
        <Container>
            <div className="box-principal">
                <div className="Voltar"><Link to="/login"> <button>Voltar</button> </Link></div>
                <div className="titulo">Criar Conta</div>
                <div className="box-login">
                    <div className="box-inputs-esquerda">
                        <div className="input-login">
                            <div className="info-login"><b> Nome: </b></div>
                            <input value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>E-mail: </b></div>
                            <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> Senha: </b></div>
                            <input value={senha} type="password" onChange={e => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <div className="box-inputs-direita">
                        <div className="input-login">
                            <div className="info-login"><b> Telefone: </b></div>
                            <input value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>Endereço: </b></div>
                            <input value={endereco} onChange={e => setEndereco(e.target.value)} />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> Número da Residência: </b></div>
                            <input value={numeroEndereco} onChange={e => setNumeroEndereco(e.target.value)} />
                        </div>
                    </div>    
                </div>
                <div className="criar-conta"> <button onClick={cadastrar}>Criar Conta</button> </div>
            </div>
            <Rodape />
        </Container>
    )
}