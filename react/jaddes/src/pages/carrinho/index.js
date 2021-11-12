
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Container from "./styled";
import { useState, useEffect } from 'react';
import CarrinhoItem from "../../components/comum/carrinho-item";
//import { Link } from "react-router-dom";
import Sucesso from "../../components/pedido-feito";
import { Link } from "react-router-dom";
import Api from "../../service/apiCliente";

const api = new Api();



export default function Carrinho(){


    const [informations, setInformations] = useState([])

    const [pedidos, setPedidos] = useState([])
    const [mostrarConfirmado, setMostrarConfirmado] = useState(false); 
    
    async function mostrarInfo(){
        let r = api.conferir()
        setInformations(r);
    }

    useEffect(mostrarInfo, []);

    function mostrar(){
        const r = [
            {
              id: 1,
              nome: "refri",
              preco: "R$ 5,00",
              descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
              especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
              id: 2,
              nome: "Batatana",
              preco: "R$ 5,00",
              descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
              especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
            },
            {
              id: 3,
              nome: "Hamburguer",
              preco: "R$ 10,00",
              descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
              especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
            }
          ]

          setPedidos(r)
    }

    console.log(pedidos)
    console.log(informations + 'por favoror')


    return(
        <Container>
            <Cabecalho />
            <div className="box-carrinho"> 
                <div className="box-inicio"> 
                    <div className="nome-carrinho">Carrinho: {informations.ds_endereco} </div>
                    <div className="voltar-carrinho"> <Link to='/bebidas'> <button>Voltar </button> </Link> </div>
                </div>
                <div className="box-pedido-carrinho"> 
                    <div className="info-pedido"> 
                        <CarrinhoItem />
                        <div className="info-pedido-bottom">
                            <div className="usu-info">
                                <div className="text-carrinho">Endereço: </div>
                                <div className="text-carrinho">Cep: </div>
                                <div className="text-carrinho">Telefone: </div>
                                <button className="button-padrao">Alterar Informaçoes </button>    
                            </div>
                            <div className="payment">
                                <div className="text-carrinho"> Forma de Pagamento: </div>
                                <div className="payment-form"> 
                                    <button className="button-padrao"> Cartão </button>
                                    <button className="button-padrao"> Dinheiro </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="finalization">
                        <Link to='/lanches'> <button className="add"> Adicionar no Carrinho </button> </Link>
                        <button className="confirm" onClick={() => setMostrarConfirmado(true)} > Confirmar Pedido </button>
                        
                    </div>
                </div>
            </div>
            <Sucesso confirmado={mostrarConfirmado} />;
            <Rodape />
        </Container>
    )
}