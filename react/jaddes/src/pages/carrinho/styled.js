import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

.box-carrinho{
    display: flex;
    flex-direction: column;
    background-color: #F3EAD7;
    padding: 3em;
    
}


.box-inicio{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1em;
}


.titulo-carrinho{
    font-size: 25px;
    font-weight: 700;
}

.voltar-carrinho button{
    color: white;
    background-color: #78290F;
    border: none;
    border-radius: 10px;
    padding: 0.5em 2em;
}

.voltar-carrinho button:hover{
    background-color: #6B220A;
}

.text-carrinho{
    margin: 0em 1em 0.5em 0em;
    font-weight: 700;
}

.box-pedido-carrinho{
    width: 100;
    background-color: white;
    border-radius: 10px;
    padding: 2em 3em;
}


.button-padrao{
    background-color: #DFDFDF;
    font-size: 10px;
    font-weight: 700;
    border: solid 0.5px black;
    border-radius: 5px;
    padding: 0.3em 1em;
    margin-top: 1em;
}

.button-padrao:hover {
    background-color: #B2B2B2;
}

.right-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.info-pedido-bottom{
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    justify-content: space-between;
}

.payment{
    display: flex;
    flex-direction: row;
}

.payment-form{
    display: flex;
    flex-direction: column;
}


.add{
    padding: 0.5em 1em;
    background-color: #D77272;
    border-radius: 10px;
    width: 15em;
    border: solid 0.5px #BB3A3A;
    margin-bottom: 1em;
}

.add:hover{
    background-color: #BB3A3A;
}


.confirm{
    padding: 0.5em 1em;
    background-color: #B3C694;
    border-radius: 10px;
    width: 15em;
    border: solid 0.5px #99B66A;
}

.confirm:hover{
    background-color: #99B66A;
}

`

const ContainerDeslog = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

.box-carrinho{
    display: flex;
    flex-direction: column;
    background-color: #F3EAD7;
    padding: 3em;
    
}


.box-inicio{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1em;
}


.titulo-carrinho{
    font-size: 25px;
    font-weight: 700;
}

.voltar-carrinho button{
    color: white;
    background-color: #78290F;
    border: none;
    border-radius: 10px;
    padding: 0.5em 2em;
}

.voltar-carrinho button:hover{
    background-color: #6B220A;
}

.text-carrinho{
    margin: 0em 1em 0.5em 0em;
    font-weight: 700;
}

.box-pedido-carrinho{
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 65vh;

    background-color: white;
    border-radius: 10px;
    padding: 2em 3em;

    align-items: center;
    justify-content: center;
    text-align: center;
}

.box-pedido-carrinho h1{
    width: 20em;
}




`

export {Container, ContainerDeslog} 