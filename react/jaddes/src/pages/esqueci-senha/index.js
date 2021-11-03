
import Container from "./styled"
import Rodape from "../../components/comum/rodape"


export default function Forgot(){
    return(
        <Container>
            <div className="box-principal">
                <div className="Voltar"> <a href="/login"> <button>Voltar</button> </a></div>
                <div className="titulo"> Instrução </div>
                <div className="text-instrucao"> Insira seu e-mail abaixo. Enviaremos uma mensagem para que possa redefinir senha </div>
                <div className="box-email">  
                    <div className="input-email">
                        <div className="info-email"><b> E-mail: </b></div>
                        <input />
                    </div>
                </div>
                <div className="send"> <button>Enviar</button> </div>
            </div>
            <Rodape />
        </Container>
    )
}