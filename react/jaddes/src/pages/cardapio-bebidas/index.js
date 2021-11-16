import Container from "./styled";
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Faixa from "../../components/comum/faixa-produto";
import Filtrar from "../../components/comum/botao-filtrar";
import Api from "../../service/apiProdutos";
import { useEffect, useState } from "react";

const api = new Api();



export default function CardapioSobremesas(){

    const [ bebida, setBebidas] = useState([])
    const [ cerveja, setCerveja] = useState([])
    const [ bebidaQuente, setBebidaQuente] = useState([])
    const [ sucos, setSucos] = useState([])
    const [ refri, setRefri] = useState([])

    async function mostrar(){
        let r = await api.bebidas(); 
        setBebidas(r);

        let r2 = await api.cerveja(); 
        setCerveja(r2);

        let r3 = await api.bebidasQuentes(); 
        setBebidaQuente(r3);

        let r4 = await api.suco();
        setSucos(r4);

        let r5 = await api.refri();
        setRefri(r5);

    }

    useEffect( () => {mostrar()}, [])  
    

    return(
        <Container>
            <Cabecalho />
            <div className="box-principal">
                
                <div className="imagem"> 
                    <div className="categoria"> Bebidas </div>
                </div>
                
                    <div className="cardapio-inicio">
                        <div className="Cardapio-title"> Cardapio:</div>
                        <Filtrar />
                        
                    </div>
                    <div className="Faixa-cardapio">
                        <Faixa produtos={refri} titulo="Refrigerantes" />
                        <Faixa produtos={cerveja} titulo="Cervejas" />
                        <Faixa produtos={bebidaQuente} titulo="Bebidas Quentes" />
                        <Faixa produtos={sucos} titulo="Sucos" />               
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}