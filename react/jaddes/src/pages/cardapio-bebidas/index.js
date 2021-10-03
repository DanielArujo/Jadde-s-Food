import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";

export default function CardapioBebidas(){
    return(
        <Container>
            <Cabecalho />
            <div class="box-principal">
                
                <div class="imagem"> 
                    <div class="categoria"> Bebidas </div>
                    <img src="../assets/images/img-principal-bebidas.svg" alt="" /> 
                </div>
                
                    <div class="cardapio-inicio">
                        <div class="Cardapio-title"> Cardapio:</div>
                        <div class="filtrar-categoria"> 
                            <button><img src="../assets/images/filtrar-img.svg" alt="" /> Filtrar por categorias </button>
                        </div>
                    </div>
                    <div class="Faixa-cardapio">
                        <Faixa />
                        <Faixa />
                        <Faixa />
                        <Faixa />
                        <Faixa />
                        <Faixa />
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}