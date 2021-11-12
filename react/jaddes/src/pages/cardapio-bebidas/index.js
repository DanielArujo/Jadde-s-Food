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
        let r = await api.bebidas(); // api do Sorvete
        setBebidas(r);

        let r = await api.cerveja(); // api do Sorvete
        setCerveja(r);

        let r = await api.bebidasQuentes(); // api do Sorvete
        setBebidaQuente(r);

        let r = await api.suco(); // api do Sorvete
        setSucos(r);

        let r = await api.refri(); // api do Sorvete
        setRefri(r);

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
                        <Faixa produtos={bebida} titulo="Bebidas" />
                        <Faixa produtos={cerveja} titulo="Cervejas" />
                        <Faixa produtos={bebidaQuente} titulo="Bebidas Quentes" />
                        <Faixa produtos={sucos} titulo="Sucos" />
                        <Faixa produtos={refri} titulo="Refrigerantes" />
                    </div>
            </div>

            <Rodape />
        </Container>
    )
}