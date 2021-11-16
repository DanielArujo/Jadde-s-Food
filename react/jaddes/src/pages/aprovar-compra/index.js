
import Container from "./styled";
import AprovarItem from "../../components/comum/aprovar-item";
import Api from "../../service/apiPedido";
import { useEffect, useState } from "react";

const api = new Api()



export default function Aprovar(){

    const [ pedido, setPedido] = useState([])


    async function mostrar(){
        let r = await api.conferirPedido();
        setPedido(r)
    }


    function removerPedido(id) {
            
        let p = pedido.filter(item => item.id_cliente !== id);
        setPedido([...p]);
        }

    console.log(pedido)

    useEffect( () => {mostrar()}, [])  


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
                <div className="Informacoes"> Aprovar Produtos </div>
                <div className="box-funcionalidades">
                    <div className="box-aprovar">
                    {pedido.map(item => 
                          <AprovarItem key={item.id_cliente}
                              info={item}
                              onDelete={removerPedido}
                          />
                      )}
        
                    
                    </div>  
                </div>
            </div>
            <div className="Faixa"></div>
        </Container>
    )
}