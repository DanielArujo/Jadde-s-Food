
import Container from "./styled"
import Rodape from "../../components/comum/rodape"


export default function Login(){
    return(
        <Container>
            <div class="box-principal">
                <div class="img-principal"><img src="../assets/images/img-entrar.svg" alt="" /></div>
                <div class="box-login">
                    <div class="box-name">
                        <div class="name-restaurant">Jadde's</div>
                        <div class="second-name-restaurant">Food</div>
                    </div>
                    <div class="box-inputs">
                        <div class="input-login">
                            <div class="info-login"><b> E-mail: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b>Senha: </b></div>
                            <input />
                            
                        </div>
                        <div class="box-forgot"> <a href="../esqueci-senha/index.html"> Esqueci minha senha </a></div>
                    </div>
                    <button>Entrar</button>
                    <div class="box-creat-account">  Ainda não tem uma conta? <a href="../criar-conta/index.html">Crie Agora </a></div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}