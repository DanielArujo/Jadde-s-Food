
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;


h1{
    color: black;
    text-align: center;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #21211E;
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
    margin-top: 2em;
}

.Bottom-bar button:hover{
    background-color: #69173a;
}

.Faixa-1{
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
}


.imagens-f1{
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: space-around;
    margin: 1em;
}

.img img{
    height: 11em;
    width: auto;
    margin: 0em 1em;
}

.carousel-container{
    height: 20em;
    width: 100%;
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