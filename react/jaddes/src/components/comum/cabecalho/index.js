import { ContainerLogado, Container } from "./styled"
import Linkinicial from "../../styled/link-ini"
import { Link } from "react-router-dom"
import Cookies  from "js-cookie"
import { useEffect } from "react";
import { useHistory } from "react-router";

function lerUsuarioLogado(navigation){
    let logado = Cookies.get('logado')

    if(!logado){
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado
}

export default function Cabecalho(){
    
    
    const navigation = useHistory()
    const usuarioLogado = lerUsuarioLogado(navigation)
    
    console.log(usuarioLogado)

   useEffect( () => {Cookies.get('logado')}, [])  

    if (usuarioLogado === false){
    return(
        <Container>
                <Link to="/tela-inicial"><div className="Titulo"> 
                    <div className="name-restaurant">Jadde's</div>
                    <div className="second-name-restaurant">Food</div>
                </div></Link>
                <div className="Informacoes">
                    <Link to="/lanches"> <Linkinicial>  Lanches </Linkinicial> </Link>
                    <Link to="/sobremesas"> <Linkinicial>  Sobremesas </Linkinicial> </Link>
                    <Link to="/bebidas"> <Linkinicial>  Bebidas </Linkinicial> </Link>
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
                <Link to="/tela-inicial"><div className="Titulo"> 
                    <div className="name-restaurant">Jadde's</div>
                    <div className="second-name-restaurant">Food</div>
                </div></Link>
                <h3>Bem-Vindo(a)   {usuarioLogado.nm_cliente} !!</h3>
            </div>
            <div className="Informacoes">
                <Link to="/lanches"> <Linkinicial>  Lanches </Linkinicial> </Link>
                <Link to="/sobremesas"> <Linkinicial>  Sobremesas </Linkinicial> </Link>
                <Link to="/bebidas"> <Linkinicial>  Bebidas </Linkinicial> </Link>
            </div>
            <div className="botoes-cabecalho"> 
                <Link to='/carrinho'> <button>  <img src="../assets/images/carrinho-img.svg" alt="" /> </button> </Link> 
                <Link to="/tela-inicial"><button onClick={() => Cookies.remove('logado')}> <img src="../assets/images/logout-img.svg" alt="" /></button> </Link>
            </div>
        </ContainerLogado>
        )
    }
    
}