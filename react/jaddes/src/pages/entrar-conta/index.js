
import Container from "./styled"
import Rodape from "../../components/comum/rodape"
import { Link } from "react-router-dom"


export default function Login(){
    return(
        <Container>
            <div className="box-principal">
                <div className="img-principal"><img src="../assets/images/login-img.jpeg" alt="" /></div>
                <div className="box-login">
                    <Link to="/">
                        <div className="box-name">
                            <div className="name-restaurant">Jadde's</div>
                            <div className="second-name-restaurant">Food</div>
                        </div>
                    </Link>
                    <div className="box-inputs">
                        <div className="input-login">
                            <div className="info-login"><b> E-mail: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>Senha: </b></div>
                            <input />
                            
                        </div>
                        <div className="box-forgot"> <Link to="/esqueci"> Esqueci minha senha </Link></div>
                    </div>
                    <button>Entrar</button>
                    <div className="box-creat-account">  Ainda não tem uma conta? <Link to="/create">Crie Agora </Link></div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}