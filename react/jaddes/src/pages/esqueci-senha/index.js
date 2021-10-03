
import Container from "./styled"
import Rodape from "../../components/comum/rodape"


export default function Forgot(){
    return(
        <Container>
            <div class="box-principal">
                <div class="Voltar"> <a href="/login"> <button>Voltar</button> </a></div>
                <div class="titulo"> Instrução </div>
                <div class="text-instrucao"> Insira seu e-mail abaixo. Enviaremos uma mensagem para que possa redefinir senha </div>
                <div class="box-email">  
                    <div class="input-email">
                        <div class="info-email"><b> E-mail: </b></div>
                        <input />
                    </div>
                </div>
                <div class="send"> <button>Enviar</button> </div>
            </div>
            <Rodape />
        </Container>
    )
}