
import Container from "./styled"
import Cabecalho from "../../components/comum/cabecalho"
import Rodape from "../../components/comum/rodape"
import Item from "../../components/comum/pedido-item"

export default function Pedidos(){
    return(
        <Container>
            <Cabecalho />
            <div className="box-pedidos">
                <div className="qtd-pedidos"> 2 pedidos </div>
                <Item />
                <Item />

            </div>
            <Rodape />
        </Container>
    )
}