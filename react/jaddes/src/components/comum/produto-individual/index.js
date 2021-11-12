import { useState } from 'react'
import Container from "./styled"
import Cookies from 'js-cookie'
import { useHistory } from 'react-router'

export default function Produto(props){

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
            <div className="imagens">
                <div className="info">  {props.info.nm_produto} </div>
                <div className="comida" onClick={comprar}> <img src={props.info.ds_imagem} alt="" /></div>
                <div className="info"> {props.info.vl_produto} </div>
            </div>         
        </Container>    
    )
}