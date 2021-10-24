
import Cabecalho from "../../components/comum/cabecalho";
import Rodape from "../../components/comum/rodape";
import Container from "./styled";

export default function Carrinho(){

    const [pedidos, setPedidos] = useState([])
    useEffect(mostrar, []);

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





    return(
        <Container>
            <Cabecalho />
            <div className="box-carrinho"> 
                <div className="box-inicio"> 
                    <div className="nome-carrinho">Carrinho: </div>
                    <div className="voltar-carrinho"> <button>Voltar </button> </div>
                </div>
                <div className="box-pedido-carrinho"> 
                    <div className="info-pedido"> 
                        <div className="info-pedido-top"> 
                            <div className="pedido-img"> <img src="../assets/images/img-carrinho-item.svg" alt="" /> </div>
                            <div className="left-info">
                                <div className="text-carrinho"> Nome do Pedido </div>
                                <button className="button-padrao"> QTD: 4 </button>
                            </div>
                            <div className="right-info">
                                <div className="text-carrinho"> Preço: R$0.00 </div>
                                <button className="button-padrao">Remover Pedido </button>
                            </div>
                        </div>
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
                        <button className="add"> Adicionar no Carrinho </button>
                        <button className="confirm"> Confirmar Pedido </button>
                    </div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}