
import Carousel from 'react-multi-carousel';

import Container from "./styled"
import Produto from "../produto-individual"


import 'react-multi-carousel/lib/styles.css';



  

export default function Faixa(props){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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
  
    
    return(
        <Container>
            <div className="Nome"> {props.titulo} </div>
                
               <div className="box-produtos">
                  <Carousel 
                    responsive={responsive} 
                    containerClass="carousel-container"
                    infinite={true}
                    >

                      {props.produtos.map(item => 
                          <Produto key={item.id_produto}
                              info={item}
                          />
                      )}

                  </Carousel>
                </div>
                 
        </Container>
    )
}