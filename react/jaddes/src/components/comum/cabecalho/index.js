
import Container from "./styled"

export default function Cabecalho(){
    return(
            <Container>
                <div class="Titulo">
                    <div class="name-restaurant">Jadde's</div>
                    <div class="second-name-restaurant">Food</div>
                </div>
                <div class="Informacoes">
                    <div > Delivery</div>
                    <div > Pedidos</div>
                    <div > Cardápio</div>
                </div>
                <div class="botoes"> 
                    <button>Entrar</button>
                    <button>Cadastrar-se</button>
                </div>
            </Container>
    )
}