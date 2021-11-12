import axios from 'axios';

const api = axios.create({
    baseURL:'https://jaddesheroku.herokuapp.com/'
})


export default class Api{


    
    async show(){
        let r = await api.get('/produto')
        return r.data
    } 


    // Produtos Lanches
    async meat(){
        let r = await api.get('/produto/carne')
        return r.data 
    }

    async salg(){
        let r = await api.get('/produto/salgados')
        return r.data 
    }

    async past(){
        let r = await api.get('/produto/pasteis')
        return r.data 
    }

    async pizza(){
        let r = await api.get('/produto/pizzas')
        return r.data 
    }

    // Produtos Bebidas

    async bebidas(){
        let r = await api.get('/produto/bebidas')
        return r.data 
    }

    async cerveja(){
        let r = await api.get('/produto/cervejas')
        return r.data 
    }

    async bebidasQuentes(){
        let r = await api.get('/produto/bebida-quente')
        return r.data 
    }

    async suco(){
        let r = await api.get('/produto/sucos   ')
        return r.data 
    }

    async refri(){
        let r = await api.get('/produto/refri')
        return r.data 
    }


    // Produtos Sobremesas

    async sorvete(){
        let r = await api.get('/produto/sorvete')
        return r.data 
    }

    async churros(){
        let r = await api.get('/produto/churros')
        return r.data 
    }

    async bolos(){
        let r = await api.get('/produto/bolos')
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