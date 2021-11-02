
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;


.box-principal{
display: flex;
flex-direction: column;
background-color: #F3EAD7;
}



.imagem{
display: flex;
height: 50vh;

align-items: center;
justify-content: center;

background-image: url('../assets/images/img-principal-lanches.svg');
background-size: 100%;
background-position-y: 100%;
}

.categoria{
font-size: 5em;
font-weight: 800;
color: white;

}


.cardapio-inicio{
display: flex;
flex-direction: column;
}


.Faixa-cardapio{
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
margin: 5em 0em;
}

.Cardapio-title{
font-size: 3em;
font-weight: 800;
margin-left: 1em;
}


`

export default Container;