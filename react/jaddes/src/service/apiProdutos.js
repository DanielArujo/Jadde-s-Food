import axios from 'axios';

const api = axios.create({
    baseURL:'https://jaddesheroku.herokuapp.com/'
})


export default class Api{


    // Produtos
    async show(){
        let r = await api.get('/produto')
        return r.data
    } 

    async meat(){
        let r = await api.get('/produto/carne')
        return r.data 
    }

    async salg(){
        let r = await api.get('/produto/salgados')
        return r.data 
    }

    async insert(produto, valor, descricao, categoria, img, codigo){
        let r = await api.post('/produto', {produto, valor, descricao, categoria, img, codigo})
        return r.data
    }

    async delete(id){
        let r = await api.delete('/produto/' + id)
        return r.data
    }

    async change(id, produto, valor, descricao, categoria, img, codigo){
        let r = await api.put('/produto/' + id, {produto, valor, descricao, categoria, img, codigo})
         return r.data
    }

    async moreSailed(){
        let r = await api.get('/produto/maisVendido')
        return r.data
    }
}