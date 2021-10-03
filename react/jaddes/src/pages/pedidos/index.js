
import Container from "./styled"
import Cabecalho from "../../components/comum/cabecalho"
import Rodape from "../../components/comum/rodape"

export default function Pedidos(){
    return(
        <Container>
            <Cabecalho />
            <div className="box-pedidos">
                <div className="qtd-pedidos"> 2 pedidos </div>
                <div className="item-pedido">
                    <div className="info-top"> 
                        <div className="info-pedido-esquerda">
                            <div className="pedido-text">Pedido realizado</div>
                            <div className="pedido-text"> 30 de Agosto de 2021 </div>
                        </div>
                        <div className="info-pedido-direita">
                            <div className="pedido-text"> Pedido N°99999999999 </div>
                            <div className="pedido-datails"> Exibir detalhes do pedido </div>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <div className="img-pedido"> <img src="" alt="" /> </div>
                        <div className="botoes">
                            <button> Avaliar Pedido </button>
                            <button> Arquivo Pedido </button> 
                        </div>
                    </div>
                </div>


            </div>
            <Rodape />
        </Container>
    )
}