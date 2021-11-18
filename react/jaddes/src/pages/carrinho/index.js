
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import {Container, ContainerDeslog} from "./styled";
import { useEffect, useState} from 'react';
import CarrinhoItem from "../../components/comum/carrinho-item";
import Sucesso from "../../components/pedido-feito";
import { Link } from "react-router-dom";
import RedButton from "../../components/styled/red-button";
import Cookies from "js-cookie";
import ApiPedido from "../../service/apiPedido";
import Api from "../../service/apiCliente";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const api = new ApiPedido();
const apiCliente = new Api();



export default function Carrinho(){
    const logado = Cookies.get('logado');


    let cliente = Cookies.get('logado');
    cliente = cliente !== undefined     ? JSON.parse(cliente)
                                        : []

                                        

    const [pedidos, setPedidos] = useState([])
    const [mostrarConfirmado, setMostrarConfirmado] = useState(false); 
    const [isChange, setIsChange] = useState(false);
    const [ endereco, setEndereco] = useState(cliente.ds_endereco);
    const [ numero, setNumero] = useState(cliente.nr_endereco);  
    const [ telefone, setTelefone] = useState(cliente.nr_telefone);
    
    
    



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

        function alterarPedido(id, qtd) {

            let produtoAlterado = pedidos.filter(item => item.id_produto === id)[0];
            produtoAlterado.qtd = qtd;
        
            Cookies.set('carrinho', JSON.stringify(pedidos));
         }

         async function conclusao(){

            const formaPagamento = "dinheiro"
            const status = "Aguardando"

             let r = await api.insertPedido( formaPagamento, status, pedidos.map(item => item.id_produto), cliente.id_cliente)
         }


         function alterar(){
             if(isChange === false){
                setIsChange(true)
             }
         }

         async function confirmar(){
             if(isChange === true){
                let r = await apiCliente.alterar(cliente.id_cliente, telefone, endereco, numero)
                toast('Informaçoes Alteradas')
                setIsChange(false)
             }
         }
         console.log(cliente.nr_endereco)

    useEffect(carregarCarrinho, [])


    if(logado !== undefined){
        return(
            <Container>
                <Cabecalho />
                <ToastContainer />
                <div className="box-carrinho"> 
                    <div className="box-inicio"> 
                        <h1 className="nome-carrinho">Carrinho: </h1>
                        <div className="voltar-carrinho"> <Link to='/bebidas'> <button>Voltar </button> </Link> </div>
                    </div>
                    <div className="box-pedido-carrinho"> 
                        <div className="info-pedido">
                            {pedidos.map(item => 
                                <CarrinhoItem key={item.id_produto}
                                info={item}
                                onRemove={removerPedido}
                                onChange={alterarPedido} 
                                />
                                )}
    
                            
                            
                            <div className="info-pedido-bottom">
                                {isChange === false 
                                ?
                                <div className="usu-info">
                                    <div className="text-carrinho">Endereço: { endereco} </div>
                                    <div className="text-carrinho">Numero da Residência: { numero } </div>
                                    <div className="text-carrinho">Telefone: { telefone } </div>
                                    <button className="button-padrao" onClick={alterar}>Alterar Informaçoes </button>    
                                </div>
                                :
                                <div className="usu-info">
                                <div className="text-carrinho">Endereço:<input  value={endereco} onChange={e => setEndereco(e.target.value) } /></div>
                                <div className="text-carrinho">Numero da Residência:<input value={numero} onChange={e => setNumero(e.target.value) }/></div>
                                <div className="text-carrinho">Telefone:<input value={telefone} onChange={e => setTelefone(e.target.value) }/></div>
                                <button className="button-padrao" onClick={confirmar}>Alterar Informaçoes </button> 
                            </div>
                                }
                                
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
                <Sucesso confirmado={mostrarConfirmado}
                        concluir={conclusao} />;
                <Rodape />
            </Container>
        )
    }else{
        return(
            <ContainerDeslog>
                <Cabecalho />
                <div className="box-carrinho"> 
                    <div className="box-inicio"> 
                        <h1 className="nome-carrinho">Carrinho: </h1>
                        <div className="voltar-carrinho"> <Link to='/bebidas'> <button>Voltar </button> </Link> </div>
                    </div>
                    <div className="box-pedido-carrinho"> 
                        <h1> VOCE PRECISA ESTAR LOGADO PARA ADICIONAR UM ITEM AO CARRINHO </h1>
                        <Link to='/login'> <RedButton>Fazer Login Agora </RedButton> </Link>
                    </div>
                </div>
                <Rodape />
            </ContainerDeslog>
        )
    }

    
}