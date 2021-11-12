import Container from "./styled";
import Qtd from "../quantidade";


export default function CarrinhoItem(props){

    function remover() {
        props.onRemove(props.info.id_produto);
      }

    return(
        <Container>
             <img src={props.info.ds_imagem} alt="" />
            <Qtd />
            <div className="remove" onClick={remover}>Remover Pedido</div>
            <div className="pagamento">
                <div>Preço:</div>
                <div> {props.info.vl_produto}</div> 
            </div>

        </Container>
    )
}