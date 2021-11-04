import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api{

    async show(){
        let r = await api.get('/produto')
        return(r.data)
    } 

    async insert(produto, valor, descricao, categoria, img, codigo){
        let r = await api.post('/produto', {produto, valor, descricao, categoria, img, codigo})
        return(r.data)
    }

    async delete(id){
        let r = await api.delete('/produto/' + id)
        return(r.data)
    }

    async change(id, produto, valor, descricao, categoria, img, codigo){
        let r = await api.put('/produto/' + id, {produto, valor, descricao, categoria, img, codigo})
         return(r.data)
    }
        

}