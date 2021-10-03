
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
                    <div > Pedidos</div>
                    <div > <Linkinicial href="/cardapio"> Cardápio </Linkinicial></div>
                </div>
                <div class="botoes"> 
                    <button>Entrar</button>
                    <button>Cadastrar-se</button>
                </div>
            </Container>
    )
}