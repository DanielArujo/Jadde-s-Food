import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;

a{
    color: red;
}

a:hover{
    text-decoration: underline;
}

.box-principal{
display: flex;
flex-direction: row;
}

.img-principal{
width: 60%;
height: auto;
}

.box-login{
display: flex;
flex-direction: column;

width: 40%;
height: auto;
padding: 2em 7em 6em 7em;
background-color: #F3EAD7;
align-items: center;
}

.box-name{
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2em;
}

.name-restaurant{
font-size: 28px;
font-weight: 700;
color: #78290F;
}

.second-name-restaurant{
margin-left: 2em;
font-size: 28px;
font-weight: 700;
color: #78290F;
}

.box-inputs{
display: flex;
flex-direction: column;
align-items: flex-end;
}

.input-login{
margin-top: 1.5em;
}


.input-login input{
width: 25em;
height: 3em;
border-radius: 10px;
border: solid 1px;
outline: none;
cursor: text;

}

.info-login{
margin-bottom: 0.5em;
font-size: 20px;
}



.box-forgot{
margin: 0.5em 1em 3em 0em;
color: red;
}

.box-login button{
width: 11em;
padding: 0.7em 0em;
margin: 1em 0em;
cursor: pointer;
font-size: 25px;
font-weight: 700;
border-radius: 10px;
border: none;
color: white;
background-color: #A82C2C;
}

.box-login button:hover{
background-color: #941e1e;
}

.box-creat-account{
font-weight: 700;
width: 24em;
text-align: right;

}

`

export default Container