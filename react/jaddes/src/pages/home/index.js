import Container from "./styled"
import { Link } from "react-router-dom"



export default function Home(){
    return(
        <Container>
            <div class="link"> <Link to= '' > <button> Informacoes Adm  </button></Link></div>
            <div class="link"> <Link to=''> <button> Login Adm</button> </Link> </div>
            <div class="link"> <a href="./aprovar-clientes/index.html">  <button> Aprovar Compras </button> </a> </div>
            <div class="link"> <a href="./adicionar produto/index.html"> <button>  Adiocionar Produtos</button> </a></div>
            <div class="link"> <a href="./produtos/index.html"> <button> Produtos </button> </a></div>
            <div class="link"> <Link to="/login"> <button> Entrar-cliente </button> </Link> </div>
            <div class="link"> <Link to="/create"> <button> Criar Conta </button> </Link> </div>
            <div class="link"> <Link to="/esqueci"> <button> Esqueceu Senha </button> </Link> </div>
            <div class="link"> <Link to="tela-inicial"> <button> Tela Inicial </button> </Link> </div>
            <div class="link"> <Link to="/lanches"> <button> Cardapio - Lanches </button> </Link> </div>
            <div class="link"> <Link to="/pedidos"> <button> Pedidos - Amd </button> </Link> </div>
        </Container>
    )
}