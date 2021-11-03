import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api{

    async show(){
       return await api.get('/produto')
    } 

    async insert(produto, valor, descricao, categoria, img, codigo){
    return await api.post('/produto', {produto, valor, descricao, categoria, img, codigo})
    }

    async delete(id){
    return await api.delete('/produto/' + id)
    }
        

}