import { Link } from 'react-router-dom'
import Container from "./styled"

export default function Produto(){
    return(
        <Container>
            <div class="imagens">
                <div class="comida"> <Link to="/carrinho" >   <img src="../assets/images/burgao.svg" alt="" /> </Link> </div>
                
                <div class="preco"> Preço </div>
            </div>         
        </Container>
    )
}