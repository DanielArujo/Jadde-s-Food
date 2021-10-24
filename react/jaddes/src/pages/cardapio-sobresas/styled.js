
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
}

.categoria{
font-size: 5em;
font-weight: 800;
color: white;
position: absolute;
}

.imagem img{
width: 100%;
}


.cardapio-inicio{
display: flex;
flex-direction: column;
}



.filtrar-categoria{
display: flex;
justify-content: flex-end;
padding: 0em 3em;
}



.filtrar-categoria button{
border: none;
border-radius: 10px;
background-color: #A5340E;
color: white;
height: 8vh;
padding: 0.5em 1em;
font-size: 17px;
font-weight: 700;
box-shadow: 0px 5px 10px #6b6b6b;
}

.filtrar-categoria img{
margin-right: 1.5em;
cursor: pointer;
}

.filtrar-categoria button:hover{
background-color: #802608;
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