

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

.box-pedidos{
    display: flex;
    flex-direction: column;
    background-color: yellow;
    padding: 3em;
}

.item-pedido{
    padding: 0.5em 1em;
    background-color: white;
}

.info-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: gray;
}

.info-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.botoes button{
    display: flex;
    flex-direction: column;
}

`

export default Container;