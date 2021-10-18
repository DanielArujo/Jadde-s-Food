
import Container from "./styled"
import Produto from "../produto-individual"


export default function Faixa(){
    return(
        <Container>
            <div class="Nome"> Hambúrguer com Carne</div>
            <div class="box-produtos">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                <Produto />
                
            </div>       
        </Container>
    )
}