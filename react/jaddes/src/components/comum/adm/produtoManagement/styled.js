import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1em;
    height: auto;
    width: 30em;
    padding: 0.5em 1em;

    background-color: #FFFFFF;
    border-radius: 10px;
    border-bottom:solid #BBAEAE;

input{
    width: 100%;
    outline: none;
    border-radius: 10px;
    padding: 0.3em 1em;
    border: solid 1px gray;
    align-self: center;
}



b{
    margin-right: 5px;
}

.top-info{
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    margin: 1em;
    height: auto;
    border-radius: 10px;
}

.produto-info{
    margin: 0em 1em;
}


.produto-info > div{
    margin: 0.5em 0em;
}

.img img{
    height: 7em;
    width: 10em;
    border-radius: 10px;
}

.box-botoes button{
    border: none;
    border-radius: 10px;
    padding: 0.3em 0.8em;
    margin-bottom: 1em;
}

.alterar button{
    background-color: #7ccf0f;
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

.desc{
    margin-left: 2em;
}


`


export default Container