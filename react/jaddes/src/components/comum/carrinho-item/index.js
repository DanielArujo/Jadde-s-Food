import Container from "./styled";
import Qtd from "../quantidade";
import { useState } from "react";


export default function CarrinhoItem(props){

    const [ pedido, setPedido  ] = useState(props.info)


    function alterar(qtd){
        setPedido({...pedido, qtd} )
        props.onChange(pedido.id_produto, qtd)
    }


    function remover() {
        props.onRemove(pedido.id_produto);
      }

    console.log(pedido.id_produto)

    
    return(
        <Container>
             <img src={pedido.ds_imagem} alt="" />
            <Qtd onChange={alterar} value={pedido.qtd } />
            <div className="remove" onClick={remover}>Remover Pedido</div>
            <div className="pagamento">
                <div>Preço:</div>
                <div> { pedido.vl_produto * pedido.qtd + ",00"}</div> 
            </div>
        </Container>
    )
}