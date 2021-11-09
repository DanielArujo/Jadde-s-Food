
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;


h1{
    color: white;
    text-align: center;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
    font-size: 3em;
}

.box-principal{
    background-color: #F3EAD7;
}

.img-inicial{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.img-inicial img{
    width: 100%;
}


.texto-inicial{
    width: 40em;
    position: absolute;
    font-size: 22px;
    font-weight: 700;
}


.Bottom-bar{
    display: flex;
    flex-direction: row;
    position: absolute;
    color: white;
    justify-content: center;
    width: 100%;
}

.Bottom-bar button{
    padding: 1em 4em;
    background-color: #882951;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
}

.Bottom-bar button:hover{
    background-color: #69173a;
}

.Faixa-1{
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
}

.Categoria{
    align-self: flex-end;
    
}

.Categoria button{
    border: none;
    border-radius: 10px;
    background-color: #A5340E;
    color: white;
    padding: 0.5em 1em;
    font-size: 17px;
    box-shadow: 0px 5px 10px #6b6b6b;
}

.Categoria img{
    margin-right: 1.5em;
    cursor: pointer;
}

.Categoria button:hover{
    background-color: #802608;
}

.imagens-f1{
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: space-around;
    margin: 1em;
}

.Faixa-2 {
    display: flex;
    flex-direction: column;
}

.Faixa-2 img{
    width: 100%;
}


`

export {Container}