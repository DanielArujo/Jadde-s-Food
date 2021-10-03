import styled from "styled-components";

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
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 1em;
}

.text-instrucao{
    width: 25em;
    margin-bottom: 3em;
    font-size: 23px;
    font-weight: 700;
    align-items: center;
    text-align: center;
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

.box-email{
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

.input-email b{
    margin-top: 1.5em;
    font-size: 25px;
}


.input-email input{
    width: 25em;
    height: 3.5em;
    padding: 1em;
    border-radius: 10px;
    border: solid 1px gray ;
    outline: none;
    cursor: text;
}

.info-email{
    margin-bottom: 0.5em;
    font-size: 20px;
}

.send{
    margin-bottom: 5em;
}

.send button{
    width: 13.5em;
    padding: 0.5em 0em;
    margin: 1em 0em;
    cursor: pointer;
    font-size: 25px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #78290F;
}

.send button:hover{
    background-color: #5e1b05;
}

`

export default Container