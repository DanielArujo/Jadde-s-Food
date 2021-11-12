import { Container } from "./styled";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { useState } from "react";


export default function PedidoItemPop(props){


    const [ produto ] = useState(props.info)
    const navigation = useHistory();
    

    function comprar(){
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];
        
        if (carrinho.some(item => item.id_produto === produto.id_produto) === false)
        carrinho.push({...produto, qtd: 1 });


        Cookies.set('carrinho', JSON.stringify(carrinho));

        navigation.push('/carrinho');
    }



    return(
        <Container>
            <img src={props.info.ds_imagem} alt="" onClick={() =>comprar()}/>
            <div className="price"> {props.info.vl_produto} </div>  
        </Container>    
    )
}