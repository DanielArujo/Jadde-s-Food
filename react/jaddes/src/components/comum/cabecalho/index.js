import Container from "./styled"
import Linkinicial from "../../styled/link-ini"
import { Link } from "react-router-dom"

export default function Cabecalho(){
    return(
            <Container>
                <Link to="/"><div className="Titulo"> 
                    <div className="name-restaurant">Jadde's</div>
                    <div className="second-name-restaurant">Food</div>
                </div></Link>
                <div className="Informacoes">
                    <div > Delivery</div>
                    <Link to="/pedidos"> <Linkinicial>  Pedidos  </Linkinicial></Link>
                    <Link to="/sobremesas">  <Linkinicial>  Cardápio </Linkinicial></Link> 
                </div>
                <div className="botoes-cabecalho"> 
                <Link to="/login"><button>Entrar</button> </Link>
                <Link to="/create"><button>Cadastrar-se</button> </Link>
                </div>
            </Container>
    )
}