
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    background-color: #78290F;

.box-name-rodape{
    margin-bottom: 1em;
}

.name-restaurant-rodape{
    font-size: 28px;
    font-weight: 700;
    color: white;
}

.second-name-restaurant-rodape{
    margin-left: 2em;
    font-size: 28px;
    font-weight: 700;
    color: white;

}

.box-rodape-informations{
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
}

.text-redes-sociais{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    font-size: 25px;
    color: white;
    align-items: center;
    text-align: center;
}

.box-redes-sociais{
    display: flex;
    flex-direction: row;
    margin-top: 1em;
}

.twitter {
    margin: 0em 1em;
}

.box-redes-sociais button {
    border: none;
    background:none;
}


`

export default Container