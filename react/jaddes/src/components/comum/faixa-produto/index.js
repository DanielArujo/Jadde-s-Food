
import Carousel from 'react-multi-carousel';

import Container from "./styled"
import Produto from "../produto-individual"
import { useEffect, useState } from "react"
import Api from "../../../service/api";
import 'react-multi-carousel/lib/styles.css';

const api = new Api();

  

export default function Faixa(){
  const responsive = {
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
                <Carousel 
                responsive={responsive}
                infinite={true}
                showDots={true}
                containerClass="carousel-container"
                > 
                  {produto.map(item => 
                    <Produto key={item.id_produto}
                        info={item}
                    />
                    )}
                  </Carousel>
                </div> 
        </Container>
    )
}