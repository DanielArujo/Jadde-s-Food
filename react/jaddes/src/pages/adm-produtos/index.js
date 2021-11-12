import Container from "./styled";
import Management from "../../components/comum/adm/produtoManagement";
import Api from "../../service/apiProdutos";
import { useEffect, useState } from "react";
import CabecalhoAdm from "../../components/comum/adm/cabecalho";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = new Api();


export default function Produtos() {

    const [produto, setProduto] = useState([]);



    async function mostrar() {
        let r = await api.show();
        console.log(r);
        setProduto(r);
    }

    async function deletar(id) {
        await api.delete(id);
        toast('Produto Excluido')
        mostrar();
    }

    async function alterar(id, produto, valor, descricao, categoria, img, codigo) {
        await api.change(id, produto, valor, descricao, categoria, img, codigo)
        toast('Produto Alterado ')
        mostrar();
    }

    useEffect(() => { mostrar() }, [])


    return (
        <Container>
            <CabecalhoAdm />
            <ToastContainer />
            <div className="background-informacoes">
                <div className="Informacoes"> Produtos </div>
                <div className="box-funcionalidades">
                    <div className="box-produtos">
                        {produto.map(item =>
                            <Management key={item.id_produto}
                                info={item}
                                onDelete={deletar}
                                onChange={alterar} />
                        )}
                    </div>
                </div>
            </div>
            <div className="Faixa"></div>
        </Container>
    )
}