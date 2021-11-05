import { Link } from "react-router-dom";
import Container from "./styled";



export default function CabecalhoAdm(){
    return(
        <Container>
            <div className="box-text-cabecalho"> 
                <div className="NomeAdm">Perfil Administrador</div>
                <div className="img-adm"> <img src="https://image.flaticon.com/icons/png/512/306/306222.png" alt="" /></div>
                <div className="texto"> Seja bem vindo volta</div>
            </div>
             <div className="img-sair"><Link to='/'><img src="https://image.flaticon.com/icons/png/512/277/277575.png" alt="" /> </Link> </div>
        </Container>
    )
}