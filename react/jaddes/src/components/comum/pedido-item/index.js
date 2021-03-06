

import Container from "./styled"

export default function Item(){
    return(
        <Container>
            <div className="info-top"> 
                <div className="info-pedido-esquerda">
                    <div className="pedido-text">Pedido realizado</div>
                    <div className="pedido-text"> 30 de Agosto de 2021 </div>
                </div>
                <div className="info-pedido-direita">
                    <div className="pedido-text"> Pedido N°99999 </div>
                    <div className="pedido-datails"> Exibir detalhes do pedido </div>
                </div>
            </div>
            <div className="info-bottom">
                <div className="img-pedido"> <img src="../assets/images/pedido-img.svg" alt="" /> </div>
                <div className="botoes-pedido">
                    <button> Avaliar Pedido </button>
                    <button> Arquivo Pedido </button> 
                </div>
            </div>
        </Container>

    )
}