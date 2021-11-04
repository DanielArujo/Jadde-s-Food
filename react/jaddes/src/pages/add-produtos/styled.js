import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;


.Barra{
    display: flex;
    flex-direction: row;
    padding: 0.5em 1em;
    justify-content: space-between;
    font-family: Alatsi;

    align-items: center;
    color: white;
    background-color: #78290F;
    font-size: 30px;
}

.Barra img{
    height: 50px;
    width: 50px;
    
}

.box-text-cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.img-adm{
    margin: 0em 1em;
}

.Informacoes{
    margin: 0em 0em 1em 5em;
    color: white;
    font-size: 28px;
}

.background-informacoes{
    display: flex;
    flex-direction: column;

    padding: 3em;
    background-color: #CBA28C;
    min-height: 85vh;
}

.box-funcionalidades{
    display: flex;
    justify-content: center;
}

.addProduto{
    display: flex;
    flex-direction: column;
    padding: 2em;
    min-width: 50vw;
    min-height: 52vh;
    background-color: #F3EAD7;
    border-radius: 10px;
}

.box-inputs{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.box-inputs input{
    padding: 1.5em 2em;
    margin-bottom: 2em;
    border-radius: 10px;
    border: none;
    outline: none;
}

.inputs-direita{
    margin-left: 3em;
}

.add{
    display: flex;
    justify-content: flex-end;
    margin-right: 3em;
}

.add button{
    padding: 0.7em 3em;
    background-color: #8FDB53;
    border-radius: 30px;
    border: none;
}

.Faixa{
    display: flex;
    background-color: #78290F;
    height: 10vh;    
}

`

export default Container;