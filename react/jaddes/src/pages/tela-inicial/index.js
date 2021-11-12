
import { Container } from "./styled"
import Cabecalho from "../../components/comum/cabecalho"
import Rodape from "../../components/comum/rodape"
import Filtrar from "../../components/comum/botao-filtrar"
import FaixaProdutoPop from "../../components/comum/faixa-produto-pop"
import Cookies from "js-cookie"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

Cookies.get('logado');


export default function Jaddes(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
        
      };
      
    
    return(
        <Container>
            <Cabecalho />
            <div className="box-principal">
                <div className="Bottom-bar"> 
                    <a href="#vendido"><button> Mais Vendidos </button></a>
                </div>
                
                <div className="img-inicial">
                    <div className="texto-inicial"> Nós do Jadde's Food oferecemos o melhor ao nossos clientes, desde o conforto dos nossos restaurantes, até a melhor comida de São Paulo! Não passe vontade, se direcione a unidade mais próxima de você e aproveite!</div>
                    <img src="../assets/images/img-tela-inicial.svg" alt="" /> 
                </div>   
                <div className="Faixa-1">  
                    <Filtrar />
                    <div className="imagens-f1">
                    <Carousel 
                    responsive={responsive}
                    containerClass="carousel-container"
                    showDots={true}
                    infinite={true}
                    >
                        <div className="img">  <img src="../assets/images/init-burger.jpg" alt="" /></div>
                        <div className="img"> <img src="../assets/images/init-pizza.jpg" alt="" /> </div>
                        <div className="img"> <img src="../assets/images/init-batata.jpg" alt="" /> </div>
                        <div className="img"> <img src="../assets/images/img-inicial-1.svg" alt="" /> </div>
                        <div className="img"> <img src="../assets/images/img-inicial-2.svg" alt="" /> </div>
                        <div className="img"> <img src="../assets/images/img-inicial-3.svg" alt="" /> </div>
                        
                    </Carousel>
                    </div>
                </div>

                <div className="Faixa-2">
                    <div> <img src="../assets/images/img-f2.png" alt="" /> </div>
                    <h1 id="vendido"> Mais Vendidos:</h1>
                    <FaixaProdutoPop />
                </div>
            </div>
            <Rodape />
        </Container>
    )
} 