
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    border: solid 0.5px #B3A2A2;
    width: 80vw;
    margin-bottom: 2em;



.info-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #DFDFDF;
    border-radius: 10px;
    border: solid 0.5px #B3A2A2;
    padding: 0.5em 1em;
}

.info-pedido-direita{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.pedido-text{
    color: #645D5D;
    margin: 0.5em;
}

.info-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 4em;
    align-items: center;
}

.img-pedido{
    display: flex;
    justify-content: center;
    width: 25em;
}

.botoes-pedido button{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: solid 0.5px black;
    border-radius: 10px;
    width: 20em;
    padding: 0.5em;
    margin-bottom: 1em;
}

.botoes-pedido button:hover {
    background-color: #DFDFDF;
}

`

export default Container