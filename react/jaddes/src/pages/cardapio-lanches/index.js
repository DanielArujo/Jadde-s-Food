
import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";
import Filtrar from "../../components/comum/botao-filtrar";


export default function CardapioLanches(){
    return(
        <Container>
            <Cabecalho />
            <div class="box-principal">
                
                <div class="imagem"> 
                    <div class="categoria"> Lanches </div>
                </div>
                
                    <div class="cardapio-inicio">
                        <div class="Cardapio-title"> Cardapio:</div>
                        <Filtrar />
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