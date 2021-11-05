
import { Container } from "./styled"
import CabecalhoLogado from "../../components/comum/cabecalho-logado"
import Rodape from "../../components/comum/rodape"
import Filtrar from "../../components/comum/botao-filtrar"
import FaixaProdutoPop from "../../components/comum/faixa-produto-pop"

export default function Jaddes(){
    return(
        <Container>
            <CabecalhoLogado />

            <div className="box-principal">
                <div className="Bottom-bar"> 
                    <a href="#vendido"><button> Mais Vendidos </button></a>
                    <button> Ofertas </button>
                </div>
                
                <div className="img-inicial">
                    <div className="texto-inicial"> Nós do Jadde's Food oferecemos o melhor ao nossos clientes, desde o conforto dos nossos restaurantes, até a melhor comida de São Paulo! Não passe vontade, se direcione a unidade mais próxima de você e aproveite!</div>
                    <img src="../assets/images/img-tela-inicial.svg" alt="" /> 
                </div>   
                <div className="Faixa-1">  
                    <Filtrar />
                    <div className="imagens-f1">
                        <div className="img">  <img src="../assets/images/init-burger.jpg" alt="" /></div>
                        <div className="img"> <img src="../assets/images/init-pizza.jpg" alt="" /> </div>
                        <div className="img"> <img src="../assets/images/init-batata.jpg" alt="" /> </div>
                    </div>
                </div>

                <div className="Faixa-2">
                    <div> <img src="../assets/images/img-f2.png" alt="" /> </div>
                    <h1 id="vendido"> Mais Vendidos:</h1>

                    <FaixaProdutoPop />
                    <FaixaProdutoPop />
                </div>
            </div>
            <Rodape />
        </Container>
    )
} 