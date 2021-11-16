import axios from 'axios';

const api = axios.create({
    baseURL:"https://jaddesheroku.herokuapp.com/"
})


export default class Api{
    async insertPedido(formaPagamento, status, produtos , idcliente){
        let r = await api.post('/pedido/v2', {formaPagamento, status, produtos , idcliente});
        return(r.data)
    }


    async conferirPedido(){
        let r = await api.get('pedido/cliente')
        return r.data
    }

}