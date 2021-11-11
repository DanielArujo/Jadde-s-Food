
//import Carousel from 'react-multi-carousel';

import Container from "./styled"
import Produto from "../produto-individual"
import { useEffect, useState } from "react"
import Api from "../../../service/apiProdutos";
//import 'react-multi-carousel/lib/styles.css';

const api = new Api();

  

export default function Faixa(props){
 /* const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
    //const [produto, setProduto] = useState([]);
    const [ carne, setCarne ] = useState([]);
    //const isCarne = props.info;


   // async function mostrar(){
    //    let r = await api.show();
    //    setProduto(r);
   // }

    async function isMeat(){
      let r = await api.meat();
      setCarne(r);
  }

   useEffect( () => {isMeat()}, [])  

    return(
        <Container>
            <div className="Nome"> Hambúrguer com Carne</div>
                
               <div className="box-produtos">
                  {carne.map(item => 
                    <Produto key={item.id_produto}
                        info={item}
                    />
                    )}
            
                </div>
                 
        </Container>
    )
}