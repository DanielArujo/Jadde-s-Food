import Container from "./styled"
import Api from "../../../service/apiPedido";
import { useEffect, useState } from "react";

const api = new Api()

export default function AprovarItem(props){

    const [cliente, setCliente] = useState(props.info)

    async function remover(id) {
        let r = await api.recusarPedido(id)
      }



    return(
        <Container>

            <div><b>Nome: </b> {cliente.nm_cliente} </div>
            <div><b>Itens: </b>  </div>
            <div><b>Valor:</b>  </div>
            <div> <b>Forma de Pagamento:</b> {cliente.infoc_jdf_pedidos[0].ds_formaPagamento} </div>
            <div> <b>Endereço:</b> {cliente.ds_endereco} </div>

            <div className="buttons"> 
                <button className="Recusar" onClick={ () => remover(cliente.id_cliente)}> Recusar </button>
                <button className="Aprovar"> Aprovar</button>   
            </div>
        </Container>
    )
}