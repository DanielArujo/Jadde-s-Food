import Container from "./styled";
import RedButton from "../styled/red-button";
import { Link } from "react-router-dom";



export default function Sucesso(props){
    return(
        <Container confirmado={props.confirmado}>
            <div className="conteudo">
                <img src="../assets/images/sucesso.png" alt="" />
                <h1> Seu pedido foi concluindo com sucesso!! </h1>
                <Link to="/tela-inicial">  <RedButton> Voltar à Tela Inicial </RedButton> </Link>
            </div>
        </Container>
    )
}