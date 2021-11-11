import { ContainerLogado, Container } from "./styled"
import Linkinicial from "../../styled/link-ini"
import { Link } from "react-router-dom"
import Cookies  from "js-cookie"
import { useEffect } from "react";




export default function Cabecalho(){
    
    const usuarioLogado = Cookies.get('logado');
    
  
   useEffect( () => {Cookies.get('logado')}, [])  
   console.log(usuarioLogado);

    if (usuarioLogado === undefined){
    return(
        <Container>
                <Link to="/"><div className="Titulo"> 
                    <div className="name-restaurant">Jadde's</div>
                    <div className="second-name-restaurant">Food</div>
                </div></Link>
                <div className="Informacoes">
                    <div > Delivery</div>
                    <Link to="/pedidos"> <Linkinicial>  Pedidos  </Linkinicial></Link>
                    <Link to="/sobremesas">  <Linkinicial>  Cardápio </Linkinicial></Link> 
                </div>
                <div className="botoes-cabecalho"> 
                <Link to="/login"><button>Entrar</button> </Link>
                <Link to="/create"><button>Cadastrar-se</button> </Link>
                </div>
            </Container>
            ) 
    }else{
    return(
        
            <ContainerLogado>
            <div className="left">
                <Link to="/"><div className="Titulo"> 
                    <div className="name-restaurant">Jadde's</div>
                    <div className="second-name-restaurant">Food</div>
                </div></Link>
                <img src="../assets/images/img-cliente.svg" alt="" />
            </div>
            <div className="Informacoes">
                <div > Delivery</div>
                <Link to="/pedidos">  <Linkinicial> Pedidos </Linkinicial> </Link>
                <Link to="/sobremesas"> <Linkinicial>  Cardápio </Linkinicial> </Link>
            </div>
            <div className="botoes-cabecalho"> 
                <Link to='/carrinho'> <button>  <img src="../assets/images/carrinho-img.svg" alt="" /> </button> </Link> 
                <Link to="/tela-inicial"><button onClick={() => Cookies.remove('logado')}> <img src="../assets/images/logout-img.svg" alt="" /></button> </Link>
            </div>
        </ContainerLogado>
        )
    }
    
}