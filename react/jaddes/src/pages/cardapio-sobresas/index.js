import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";
import Filtrar from "../../components/comum/botao-filtrar";
import Api from "../../service/apiProdutos";
import { useEffect, useState } from "react";

const api = new Api();



export default function CardapioSobremesas(){

    const [ sorvete, setSorvete] = useState([]);
    const [ churros, setChurros] = useState([]);
    const [ bolo, setBolo] = useState([]);


    async function mostrar(){
        let r = await api.sorvete(); 
        setSorvete(r);

        let r2 = await api.churros(); 
        setChurros(r2);


        let r3 = await api.bolos(); 
        setBolo(r3);
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
                        <Faixa produtos={sorvete} titulo="Sorvete" />
                        <Faixa produtos={churros} titulo="Churros" />
                        <Faixa produtos={bolo} titulo="Bolos" />
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}