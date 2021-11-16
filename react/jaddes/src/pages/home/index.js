import Container from './styled'
import { Link } from 'react-router-dom'



export default function Home(){
    return(
        <Container>
            <div className='link'> <Link to= '/produtos' > <button> Manutenção Produtos </button></Link></div>
            <div className='link'> <Link to='./add'> <button>  Adicionar Produtos</button> </Link></div>
            <div className='link'> <Link to='./aprovar'> <button>  Aprovar Pedidos</button> </Link></div>
            <div className='link'> <Link to='/login'> <button> Entrar-cliente </button> </Link> </div>
            <div className='link'> <Link to='/create'> <button> Criar Conta </button> </Link> </div>
            <div className='link'> <Link to='/esqueci'> <button> Esqueceu Senha </button> </Link> </div>
            <div className='link'> <Link to='/esqueci'> <button> Esqueceu Senha </button> </Link> </div>
            <div className='link'> <Link to='/tela-inicial'> <button> Tela Inicial </button> </Link> </div>
            <div className='link'> <Link to='/lanches'> <button> Cardapio - Lanches </button> </Link> </div>
            <div className='link'> <Link to='/bebidas'> <button> Cardapio - Bebidas </button> </Link> </div>
            <div className='link'> <Link to='/sobremesas'> <button> Cardapio - Sobremesas </button> </Link> </div>
        </Container>
    )
}