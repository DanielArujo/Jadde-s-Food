import styled from "styled-components";





const Container = styled.div`
    display: ${props => props.confirmado === true ? 'flex' : 'none'} ;
    

    align-items: center;
    justify-content: center;

    position: fixed;
    text-align: center;
    
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);


    padding: 2.5em;
    border-radius: 10px;

.conteudo{
    width: 50%;
    background-color: white;
    padding: 3em;
    border-radius: 10px;
    margin-top: -5em;
}

`


export default Container;