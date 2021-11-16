import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1em;
    height: auto;
    width: 33em;
    padding: 0.5em 1em;

    background-color: #FFFFFF;
    border-radius: 10px;
    border-bottom:solid #BBAEAE;


div{
    margin: 2px 0px;
}

.buttons{
    display:  flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1em;
}

.buttons button{
    margin: 0em 0.5em;
    border-radius: 10px;
    outline: none;
    padding: 0.5em 2em;
    font-weight: 700;
}


.Aprovar{
    background-color: #8FDB53;
    border: solid 1px green;
}

.Aprovar:hover{
    background-color: #569E1D;
    cursor: pointer;
}

.Recusar{
    background-color: #EF2727;
    border: solid 1px red;
}

.Recusar:hover{
    background-color: #CE1B1B;
    cursor: pointer;
}



`

export default Container;