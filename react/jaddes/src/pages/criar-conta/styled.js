
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;


.box-principal{
display: flex;
flex-direction: column;
background-color: #F3EAD7;
align-items: center;
padding: 2em;
}

.titulo{
font-size: 35px;
font-weight: 700;
margin-bottom: 1em;
}

.Voltar {
align-self: flex-start;
}   

.Voltar button{
width: 6em;
padding: 0.8em 0em;
cursor: pointer;
font-size: 15px;
font-weight: 700;
border-radius: 10px;
border: none;
color: white;
background-color: #78290F;
}

.Voltar button:hover{
background-color: #581e0a;
}

.box-login{
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 1em;
}

.box-inputs-esquerda{
margin-right: 7em;
}


.box-name{
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2em;
}


.box-inputs{
display: flex;
flex-direction: column;
align-items: flex-end;
}

.input-login{
margin-top: 1.5em;
}


.input-login input{
width: 25em;
height: 3em;
border-radius: 10px;
border: solid 1px;
outline: none;
cursor: text;

}

.info-login{
margin-bottom: 0.5em;
font-size: 20px;
}


.criar-conta button{
width: 11em;
padding: 0.7em 0em;
margin: 1em 0em;
cursor: pointer;
font-size: 25px;
font-weight: 700;
border-radius: 10px;
border: none;
color: white;
background-color: #A82C2C;
}

.criar-conta button:hover{
background-color: #941e1e;
}

` 

export default Container