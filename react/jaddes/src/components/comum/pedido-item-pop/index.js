import { Container } from "./styled";


export default function PedidoItemPop(props){
    return(
        <Container>
            <img src={props.info.ds_imagem} alt="" />
            <div className="price"> {props.info.vl_produto} </div>  
        </Container>    
    )
}