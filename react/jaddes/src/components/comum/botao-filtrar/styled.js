import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-self: flex-end;
    margin-right: 2em;
    
 button{
    border: none;
    border-radius: 10px;
    background-color: #A5340E;
    color: white;
    padding: 1em 1.5em;
    font-size: 17px;
    box-shadow: 0px 5px 10px #6b6b6b;
}

 img{
    margin-right: 1.5em;
    cursor: pointer;
    height: 1em;
    width: 2em;
}

 button:hover{
    background-color: #802608;
}


`

export default Container;