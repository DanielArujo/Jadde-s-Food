import Container from "./styled"
import Linkinicial from "../../styled/link-ini"

export default function CabecalhoLogado(){
    return(
            <Container>
                <div class="left">
                    <a href="/"><div class="Titulo"> 
                        <div class="name-restaurant">Jadde's</div>
                        <div class="second-name-restaurant">Food</div>
                    </div></a>
                    <img src="../assets/images/img-cliente.svg" alt="" />
                </div>
                <div class="Informacoes">
                    <div > Delivery</div>
                    <div >  <Linkinicial href="/pedidos" > Pedidos </Linkinicial></div>
                    <div > <Linkinicial href="/sobremesas"> Cardápio </Linkinicial></div>
                </div>
                <div class="botoes-cabecalho"> 
                <a href="/carrinho"><button>  <img src="../assets/images/carrinho-img.svg" alt="" /> </button> </a>
                <a href="/"><button> <img src="../assets/images/logout-img.svg" alt="" /></button> </a>
                </div>
            </Container>
    )
}