
import Container from "./styled"
import Rodape from "../../components/comum/rodape"


export default function Login(){
    return(
        <Container>
            <div className="box-principal">
                <div className="img-principal"><img src="" alt="" /></div>
                <div className="box-login">
                    <a href="/">
                        <div className="box-name">
                            <div className="name-restaurant">Jadde's</div>
                            <div className="second-name-restaurant">Food</div>
                        </div>
                    </a>
                    <div className="box-inputs">
                        <div className="input-login">
                            <div className="info-login"><b> E-mail: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>Senha: </b></div>
                            <input />
                            
                        </div>
                        <div className="box-forgot"> <a href="/esqueci"> Esqueci minha senha </a></div>
                    </div>
                    <button>Entrar</button>
                    <div className="box-creat-account">  Ainda não tem uma conta? <a href="/create">Crie Agora </a></div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}