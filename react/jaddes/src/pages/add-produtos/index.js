import Container from "./styled";
import Api from "../../service/apiProdutos";
import {useState } from "react";
import CabecalhoAdm from "../../components/comum/adm/cabecalho";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = new Api();


export default function AddProdutos(){
    
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ categoria, setCategoria] = useState('');
    const [img, setImg] = useState('');
    const [codigo, setCodigo] = useState('');


    async function inserir(){
        let r = await api.insert(produto, valor, descricao, categoria, img, codigo);

        if(r.erro){
            toast(r.erro)
        }else{
        toast('Produto Inserido!')
        limpar();
        }
    }

    function limpar(){
        setProduto('');
        setValor('');
        setDescricao('');
        setCategoria('');
        setImg('');
        setCodigo('');
    }

    return(
        <Container>
        <ToastContainer />
        <CabecalhoAdm />
        <div className="background-informacoes">
            <div className="Informacoes"> Adicionar Produtos </div>
            <div className="box-funcionalidades">
                <div className="addProduto">
                    <div className="box-inputs">
                        <div className="inputs-esquerda">
                            <div>  <input placeholder="Produto:" type="text" value={produto}  onChange={e => setProduto(e.target.value)}  />  </div>
                            <div>  <input placeholder="Categoria:" type="text" value={categoria}  onChange={e => setCategoria(e.target.value)}/></div>
                            <div>  <input placeholder="Codigo:"type="text" value={codigo}  onChange={e => setCodigo(e.target.value)} /></div>
                        </div>
                        <div className="inputs-direita">
                            <div> <input placeholder="Descrição:" type="text" value={descricao}  onChange={e => setDescricao(e.target.value)}/></div>
                            <div>  <input placeholder="Imagem:" type="text" value={img}  onChange={e => setImg(e.target.value)}/></div>
                            <div>  <input placeholder="Preço:" type="text" value={valor}  onChange={e => setValor(e.target.value)}/></div>
                        </div>  
                    </div>  
                    <div className="add"> <button onClick={inserir}>Adicionar Produto</button></div>
                </div>
            </div>
        </div>
        <div className="Faixa"></div>
        </Container>
    )
}