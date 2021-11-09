import axios from 'axios';

const api = axios.create({
    baseURL:"https://jaddesheroku.herokuapp.com/"
})


export default class Api{

    async insertUsu(nome, telefone , email, senha, endereco, numeroEndereco, complemento){
        let r = await api.post('/cliente', {nome, telefone, email, senha, endereco, numeroEndereco, complemento});
        return(r.data)
    }

    async logar(email, senha){
        let r = await api.post('/cliente/login', {email, senha})
        return r.data
    }
}


