import { Link } from 'react-router-dom'
import Container from "./styled"



export default function Produto(props){
    return(
        <Container>
            <div className="imagens">
                <div className="comida"> <Link to="/carrinho" > <img src={props.info.ds_imagem} alt="" /> </Link> </div>
                
                <div className="preco">  {props.info.vl_produto} </div>
            </div>         
        </Container>    
    )
}