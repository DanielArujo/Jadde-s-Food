import Container from "./styled";
import Management from "../../components/comum/adm/produtoManagement";
import Api from "../../service/api";
import { useEffect, useState } from "react";

const api = new Api();


export default function Produtos(){

    const [produto, setProduto] = useState([]);
    const [idAlterando, setIdAlterando] = useState(0)



    async function mostrar(){
        let r = await api.show();
        console.log(r);
        setProduto(r);
    }

    async function deletar(id){
        await api.delete(id);
        alert('apagou ein')
        mostrar();
    }

    async function alterar(id, produto, valor, descricao, categoria, img, codigo){
        await api.change(id, produto, valor, descricao, categoria, img, codigo)
        alert('alterou??')
        mostrar();
    }

   useEffect( () => {mostrar()}, [] )


    return(
        <Container>
            <div className="Barra">
            <div className="box-text-cabecalho"> 
                <div className="NomeAdm">Perfil Administrador</div>
                <div className="img-adm"> <img src="https://image.flaticon.com/icons/png/512/306/306222.png" alt="" /></div>
                <div className="texto"> Seja bem vindo volta</div>
            </div>
            <div className="img-sair"> <img src="https://image.flaticon.com/icons/png/512/277/277575.png" alt="" /></div>
        </div>
        
        <div className="background-informacoes">
            <div className="Informacoes"> Produtos </div>
            <div className="box-funcionalidades"> 
                <div className="box-produtos">
                        {produto.map(item => 
                            <Management key={item.id_produto}
                                        info={item}  
                                        onDelete={deletar}
                                        onChange={alterar}/>
                            )} 
                </div>  
            </div>
        </div>
        <div className="Faixa"></div>
        </Container>
    )
}