
import { Container } from "./styled"
import Cabecalho from "../../components/comum/cabecalho"
import Rodape from "../../components/comum/rodape"


export default function Jaddes(){
    return(
        <Container>
            <Cabecalho />

            <div class="box-principal">
                <div class="Bottom-bar"> 
                    <button> Mais Vendidos </button>
                    <button> Ofertas </button>
                </div>
                
                <div class="img-inicial">
                    <div class="texto-inicial"> Nós do Jadde's Food oferecemos o melhor ao nossos clientes, desde o conforto dos nossos restaurantes, até a melhor comida de São Paulo! Não passe vontade, se direcione a unidade mais próxima de você e aproveite!</div>
                    <img src="../assets/images/img-tela-inicial.svg" alt="" /> 
                </div>   
                <div class="Faixa-1">  
                    <div class="Categoria"> <button> <img src="../assets/images/filtrar-img.svg" alt="" /> Filtrar por categorias </button></div>
                    <div class="imagens-f1">
                        <div class="img">  <img src="../assets/images/img-inicial-1.svg" alt="" /></div>
                        <div class="img"> <img src="../assets/images/img-inicial-2.svg" alt="" /> </div>
                        <div class="img"> <img src="../assets/images/img-inicial-3.svg" alt="" /> </div>
                    </div>
                </div>

                <div class="Faixa-2">
                    <div> <img src="../assets/images/second-img-inicial.svg" alt="" /> </div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
} 