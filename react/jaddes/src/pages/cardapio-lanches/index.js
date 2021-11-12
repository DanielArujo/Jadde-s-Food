import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";
import Filtrar from "../../components/comum/botao-filtrar";
import Api from "../../service/apiProdutos";
import { useEffect, useState } from "react";

const api = new Api();



export default function CardapioSobremesas(){

    const [ carne, setCarne] = useState([])
    const [ salgados, setSalgados] = useState([])
    const [ pastel, setPastel] = useState([])
    const [ pizza, setPizza] = useState([])



    async function mostrar(){
        let r = await api.meat();
        setCarne(r);

        let r2 = await api.salg();
        setSalgados(r2)

        let r3 = await api.past();
        setPastel(r3)

        let r4 = await api.pizza();
        setPizza(r4)

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
                        <Faixa produtos={carne} titulo="Hamburguer" />
                        <Faixa produtos={salgados} titulo="Salgados" />
                        <Faixa produtos={pastel} titulo="Pasteis" />
                        <Faixa produtos={pizza} titulo="Pizzas" />
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}