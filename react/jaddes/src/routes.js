

import { BrowserRouter, Switch, Route } from 'react-router-dom'



import Home from './pages/home'
import TelaInicial from './pages/tela-inicial'
import CardapioLanches from './pages/cardapio-lanches'
import AddProdutos from './pages/add-produtos'
import CardapioSobremesas from './pages/cardapio-sobresas'
import CardapioBebidas from './pages/cardapio-bebidas'
import Create from './pages/criar-conta'
import Produtos from './pages/adm-produtos'
import Login from './pages/entrar-conta'
import Forgot from './pages/esqueci-senha'
import Pedidos from './pages/pedidos'
import Carrinho from './pages/carrinho'
import Aprovar from './pages/aprovar-compra'

    
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={TelaInicial} />
                <Route path="/add" exact={true} component={AddProdutos} />
                <Route path="/produtos" exact={true} component={Produtos} />
                <Route path="/aprovar" exact={true} component={Aprovar} />
                <Route path="/tela-inicial" exact={true} component={TelaInicial} />
                <Route path="/lanches" exact={true} component={CardapioLanches} />
                <Route path="/sobremesas" exact={true} component={CardapioSobremesas} />
                <Route path="/bebidas" exact={true} component={CardapioBebidas} />
                <Route path="/create" exact={true} component={Create} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueci" exact={true} component={Forgot} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/pedidos" exact={true} component={Pedidos} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/home" exact={true} component={Home}/>
                
            </Switch>
        </BrowserRouter> 
    )
}