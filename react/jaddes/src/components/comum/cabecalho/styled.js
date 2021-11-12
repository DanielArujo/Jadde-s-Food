
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #78290F;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;


    h3{
    color: white;
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
.botoes-cabecalho button{
    padding: 0.5em 1em;
    color: #78290F;
    font-weight: 800;
    background-color: #FFFFFF;
    border: solid 1px #A89999;
    border-radius: 10px;
}
`


const ContainerLogado = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #78290F;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;

h3{
    color: white;
}

.left{
    display: flex;
    flex-direction: row;
}

.Titulo{
    margin-right: 2em;
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

.botoes-cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.botoes-cabecalho button{
    background: none;
    border: none;
}

`

export{ ContainerLogado, Container }