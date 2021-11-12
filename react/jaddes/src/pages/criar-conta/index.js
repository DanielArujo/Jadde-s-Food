import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "./styled"
import Rodape from "../../components/comum/rodape"
import { Link } from "react-router-dom"
import Api  from "../../service/apiCliente"
import { useState } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";

const api = new Api();


export default function Create(){

const [ nome, setNome ] = useState('');
const [ telefone, setTelefone ] = useState('');
const [ email, setEmail ] = useState('');
const [ senha, setSenha ] = useState('');
const [ endereco, setEndereco ] = useState('');
const [ numeroEndereco, setNumeroEndereco ] = useState();
const [ complemento ] = useState('');

const navigation = useHistory()


async function cadastrar(){
    let r = await api.insertUsu(nome, telefone, email, senha, endereco, numeroEndereco, complemento)

    if(r.erro){
        toast(r.erro)
    }else{
    Cookies.set('logado', JSON.stringify(r))
    navigation.push('/tela-inicial')
    limpar();
    }
}



function limpar(){
    setNome('');
    setTelefone('');
    setEmail('');
    setSenha('');
    setEndereco('');
    setNumeroEndereco('');
}


    return(
        <Container>
            <ToastContainer />
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