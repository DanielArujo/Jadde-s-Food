import Container from "./styled";
import Qtd from "../quantidade";


export default function CarrinhoItem(){
    return(
        <Container>
             <img src="../assets/images/burgao.svg" alt="" />
            <Qtd />
            <div className="remove">Remover Pedido</div>
            <div className="pagamento">
                <div>Preço:</div>
                <div> R$ 0,00</div> 
            </div>

        </Container>
    )
}