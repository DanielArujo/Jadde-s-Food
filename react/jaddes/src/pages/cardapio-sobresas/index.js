import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";
import Filtrar from "../../components/comum/botao-filtrar";
import Api from "../../service/apiProdutos";
import { useEffect, useState } from "react";

const api = new Api();



export default function CardapioSobremesas(){

    const [ produto, setProduto ] = useState('')


    async function mostrar(){
        let r = await api.show();
        setProduto(r);
    }

    useEffect( () => {mostrar()}, [])  
    

    return(
        <Container>
            <Cabecalho />
            <div className="box-principal">
                
                <div className="imagem"> 
                    <div className="categoria"> Sobremesas </div>
                </div>
                
                    <div className="cardapio-inicio">
                        <div className="Cardapio-title"> Cardapio:</div>
                        <Filtrar />
                        
                    </div>
                    <div className="Faixa-cardapio">
                        <Faixa info={produto} />
                        <Faixa info={produto} />
                        <Faixa />
                        <Faixa />
                        <Faixa />
                        <Faixa />
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}