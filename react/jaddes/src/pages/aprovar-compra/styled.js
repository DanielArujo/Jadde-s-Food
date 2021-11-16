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
    margin-bottom: 1em;
    color: white;
    font-size: 28px;
}

.background-informacoes{
    display: flex;
    flex-direction: column;

    height: 90vh;
    padding: 1em 3em;
    background-color: #CBA28C;
}

.box-aprovar{
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;

    padding: 2em;
    height: 70vh;
    width: 90vw;

    background-color: #F3EAD7;
    border-radius: 10px;
    align-items: center;
    overflow-y: auto;
}


.Faixa{
    display: flex;
    background-color: #78290F;
    height: 10vh;    
}


`

export default Container