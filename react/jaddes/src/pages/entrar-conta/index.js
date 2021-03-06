
import Container from "./styled"
import Rodape from "../../components/comum/rodape"
import { Link } from "react-router-dom"
import Api from "../../service/apiCliente"
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Cookies from "js-cookie";


const api = new Api();

export default function Login(){

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const navigation = useHistory();

async function logando(){
    let r = await api.logar(email, senha)
    if(r.erro){
        return r.erro
    }else{
        Cookies.set('logado', JSON.stringify(r))
        navigation.push('/tela-inicial')
    }    
}


    return(
        <Container>
            <div className="box-principal">
                <div className="img-principal"><img src="../assets/images/login-img.jpeg" alt="" /></div>
                <div className="box-login">
                    <Link to="/tela-inicial">
                        <div className="box-name">
                            <div className="name-restaurant">Jadde's</div>
                            <div className="second-name-restaurant">Food</div>
                        </div>
                    </Link>
                    <div className="box-inputs">
                        <div className="input-login">
                            <div className="info-login"><b> E-mail: </b></div>
                            <input value={email} type={"email"} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>Senha: </b></div>
                            <input value={senha} type={"password"} onChange={e => setSenha(e.target.value)} />
                            
                        </div>
                        <div className="box-forgot"> <Link to="/esqueci"> Esqueci minha senha </Link></div>
                    </div>
                    <button onClick={logando}> Entrar </button>
                    <div className="box-creat-account">  Ainda n??o tem uma conta? <Link to="/create">Crie Agora </Link></div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}