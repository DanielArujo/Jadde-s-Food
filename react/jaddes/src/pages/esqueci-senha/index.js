
import Container from "./styled"
import Rodape from "../../components/comum/rodape"
import { Link } from "react-router-dom"


export default function Forgot(){
    return(
        <Container>
            <div className="box-principal">
                <div className="Voltar"> <Link to="/login"> <button>Voltar</button> </Link></div>
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