import Container from "./styled"


export default function AprovarItem(){
    return(
        <Container>

            <div><b>Nome: </b>  Daniell </div>
            <div><b>Itens: </b> </div>
            <div><b>Valor:</b> </div>
            <div> <b>Endereço: </b></div>

            <div className="buttons"> 
                <button className="Recusar"> Recusar </button>
                <button className="Aprovar"> Aprovar</button>
            </div>
        </Container>
    )
}