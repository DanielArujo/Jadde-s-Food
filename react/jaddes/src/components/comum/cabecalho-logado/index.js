import Container from "./styled"
import Linkinicial from "../../styled/link-ini"
import { Link } from "react-router-dom"

export default function CabecalhoLogado(){
    return(
            <Container>
                <div className="left">
                    <a href="/"><div className="Titulo"> 
                        <div className="name-restaurant">Jadde's</div>
                        <div className="second-name-restaurant">Food</div>
                    </div></a>
                    <img src="../assets/images/img-cliente.svg" alt="" />
                </div>
                <div className="Informacoes">
                    <div > Delivery</div>
                    <div >  <Linkinicial href="/pedidos" > Pedidos </Linkinicial></div>
                    <div > <Linkinicial href="/sobremesas"> Cardápio </Linkinicial></div>
                </div>
                <div className="botoes-cabecalho"> 
                <Link to='/carrinho'> <button>  <img src="../assets/images/carrinho-img.svg" alt="" /> </button> </Link> 
                <a href="/"><button> <img src="../assets/images/logout-img.svg" alt="" /></button> </a>
                </div>
            </Container>
    )
}