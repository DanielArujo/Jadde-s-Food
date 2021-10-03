
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;


.box-cabecalho{
display: flex;
flex-direction: row;
background-color: #78290F;
justify-content: space-between;
align-items: center;
padding: 1em 1.5em;
}


.name-restaurant{
font-size: 24px;
font-weight: 700;
color: white;
}

.second-name-restaurant{
margin-left: 2em;
font-size: 24px;
font-weight: 700;
color: white;
}

.Informacoes{
display: flex;
flex-direction: row;
font-weight: 700;
justify-content: space-between;
width: 28em;
color: white;
}

.botoes button{
padding: 0.5em 1em;
color: #78290F;
font-weight: 800;
background-color: #FFFFFF;
border: solid 1px #A89999;
border-radius: 10px;
}

.box-principal{
display: flex;
flex-direction: column;
background-color: #F3EAD7;
}



.imagem{
display: flex;
height: 85vh;
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

.box-collection{
width: 100%;
margin-bottom: 5em;
}

.Nome{
margin-left: 3em;
font-size: 25px;
font-weight: 700;
}

.box-produtos{
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: #e5cd99;
padding: 1em 0em;
}

.imagens{
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
font-weight: 700;
border: solid 0.3px #e6ba5c;
}

.box-rodape{
display: flex;
flex-direction: column;
padding: 2em;
background-color: #78290F;
}

.box-name-rodape{
margin-bottom: 1em;
}

.name-restaurant-rodape{
font-size: 28px;
font-weight: 700;
color: white;
}

.second-name-restaurant-rodape{
margin-left: 2em;
font-size: 28px;
font-weight: 700;
color: white;

}

.box-rodape-informations{
display: flex;
flex-direction: row;

justify-content: space-evenly;
}

.text-redes-sociais{
display: flex;
flex-direction: column;
justify-content: center;
width: 40%;
font-size: 25px;
color: white;
align-items: center;
text-align: center;
}

.box-redes-sociais{
display: flex;
flex-direction: row;
margin-top: 1em;
}

.twitter {
margin: 0em 1em;
}

.box-redes-sociais button {
border: none;
background-color: #78290F;
}

`

export default Container;