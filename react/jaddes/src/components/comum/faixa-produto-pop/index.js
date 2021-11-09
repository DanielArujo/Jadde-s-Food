
import  Container  from "./styled";
import PedidoItemPop from "../pedido-item-pop";
import Api from "../../../service/apiProdutos";
import { useEffect, useState } from "react"

const api = new Api();

export default function FaixaProdutoPop(){

    const [produto, setProduto] = useState([]);
    console.log(produto)

    async function mostrar(){
        let r = await api.moreSailed();
        console.log(r);
        setProduto(r);
    }

    useEffect( () => {mostrar()}, [])  

    return(
        <Container>
            {produto.map(item => 
                <PedidoItemPop key={item.id_produto}
                    info={item}
                />
            )}
        </Container>
    )
}