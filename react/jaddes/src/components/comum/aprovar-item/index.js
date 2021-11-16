import Container from "./styled"
import Api from "../../../service/apiPedido";
import { useState } from "react";

const api = new Api()

export default function AprovarItem(){

    const {pedido, setPedido} = useState([])

    async function mostrar(){
        let r = await api.conferirPedido();
        setPedido(r)
    }

    console.log(pedido)

    return(
        <Container>

            <div><b>Nome: </b>  Daniell </div>
            <div><b>Itens: </b> </div>
            <div><b>Valor:</b> </div>
            <div> <b>Forma de Pagamento: </b></div>
            <div> <b>Endereço: </b></div>

            <div className="buttons"> 
                <button className="Recusar"> Recusar </button>
                <button className="Aprovar" onClick={mostrar()} > Aprovar</button>
            </div>
        </Container>
    )
}