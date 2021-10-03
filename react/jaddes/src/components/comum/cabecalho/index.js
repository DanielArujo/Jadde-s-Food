
import Container from "./styled"
import Linkinicial from "../../styled/link-ini"

export default function Cabecalho(){
    return(
            <Container>
                <a href="/"><div class="Titulo"> 
                    <div class="name-restaurant">Jadde's</div>
                    <div class="second-name-restaurant">Food</div>
                </div></a>
                <div class="Informacoes">
                    <div > Delivery</div>
                    <div >  <Linkinicial href="/pedidos" > Pedidos </Linkinicial></div>
                    <div > <Linkinicial href="/sobremesas"> Cardápio </Linkinicial></div>
                </div>
                <div class="botoes-cabecalho"> 
                <a href="/login"><button>Entrar</button> </a>
                <a href="/create"><button>Cadastrar-se</button> </a>
                </div>
            </Container>
    )
}