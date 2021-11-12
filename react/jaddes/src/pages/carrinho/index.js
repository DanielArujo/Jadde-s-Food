
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Container from "./styled";
import { useEffect, useState} from 'react';
import CarrinhoItem from "../../components/comum/carrinho-item";
//import { Link } from "react-router-dom";
import Sucesso from "../../components/pedido-feito";
import { Link } from "react-router-dom";
import Api from "../../service/apiCliente";
import Cookies from "js-cookie";

const api = new Api();



export default function Carrinho(){

    const [pedidos, setPedidos] = useState([])
    const [mostrarConfirmado, setMostrarConfirmado] = useState(false); 
    
    let cliente = Cookies.get('logado');
    cliente = cliente !== undefined     ? JSON.parse(cliente)
                                        : []
 

    function carregarCarrinho() {

        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                        ? JSON.parse(carrinho) 
                        : [];
    
        setPedidos(carrinho);
        }                                    

        function removerPedido(id) {
            
        let carrinho = pedidos.filter(item => item.id_produto !== id);
        Cookies.set('carrinho', JSON.stringify(carrinho));
        setPedidos([...carrinho]);
        
        }

    useEffect(() => {carregarCarrinho()}, [])

    return(
        <Container>
            <Cabecalho />
            <div className="box-carrinho"> 
                <div className="box-inicio"> 
                    <h1 className="nome-carrinho">Carrinho: </h1>
                    <div className="voltar-carrinho"> <Link to='/bebidas'> <button>Voltar </button> </Link> </div>
                </div>
                <div className="box-pedido-carrinho"> 
                    <div className="info-pedido">
                        {pedidos.map(item => 
                            <CarrinhoItem key={item.id}
                            info={item}
                            onRemove={removerPedido} 
                            />
                            )}
                        
                        <div className="info-pedido-bottom">
                            <div className="usu-info">
                                <div className="text-carrinho">Endereço: { cliente.ds_endereco} </div>
                                <div className="text-carrinho">Telefone: { cliente.nr_telefone } </div>
                                <button className="button-padrao">Alterar Informaçoes </button>    
                            </div>
                            <div className="payment">
                                <div className="payment-form"> 
                                    <Link to='/lanches'> <button className="add"> Adicionar no Carrinho </button> </Link>
                                    <button className="confirm" onClick={() => setMostrarConfirmado(true)} > Confirmar Pedido </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sucesso confirmado={mostrarConfirmado} />;
            <Rodape />
        </Container>
    )
}