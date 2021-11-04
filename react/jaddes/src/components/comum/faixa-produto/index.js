
import Container from "./styled"
import Produto from "../produto-individual"
import { useEffect, useState } from "react"
import Api from "../../../service/api"
const api = new Api();


export default function Faixa(){

    const [produto, setProduto] = useState([]);

    async function mostrar(){
        let r = await api.show();
        console.log(r);
        setProduto(r);
    }


   useEffect( () => {mostrar()}, [])  


    return(
        <Container>
            <div className="Nome"> Hambúrguer com Carne</div>
            <div className="box-produtos">
            {produto.map(item => 
               <Produto key={item.id_produto}
                        info={item}
               />
               )}
                
            </div>       
        </Container>
    )
}