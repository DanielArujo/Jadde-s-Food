import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    margin: 1em;
    height: 20vh;
    width: 20em;
    padding: 0.5em 1em;

    background-color: #FFFFFF;
    border-radius: 10px;
    border-bottom:solid #BBAEAE;


.produto-info{
    margin: 0em 1em;
}

.img img{
    height: 5em;
    width: 7em;
    border-radius: 10px;
}

.name{
    margin-bottom: 0.5em;
}

.box-botoes button{
    border: none;
    border-radius: 10px;
    padding: 0.3em 0.8em;
}

.alterar button{
    background-color: #7ccf0f;
    margin-bottom: 0.5em;
}

.deletar button{
    background-color: #FF3838;
}

.alterar button:hover{
    background-color: #69b309;
}

.deletar button:hover{
    background-color: #e42828;
}



`


export default Container