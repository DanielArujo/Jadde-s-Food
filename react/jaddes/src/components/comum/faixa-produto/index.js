//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from "./styled"
import Produto from "../produto-individual"
import { useEffect, useState } from "react"
import Api from "../../../service/api";


const api = new Api();
/*const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  */

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