import Container from "./styled";


export default function AprovarItem(){
    return(
        <Container>
            <button> X </button>
            <div className="aprovar">
                <div className="img-cliente">
                    <img src="../assets/images/img-cliente.svg" alt="" />
                    
                </div>
                <div className="aprovar-info">
                    <div className="text-info">Nome:</div>
                    <div className="text-info">Itens:</div>
                    <div className="text-info">Valor:</div>
                    <div className="text-info">Endereço:</div>
                </div>
            </div>
        </Container>
    )
}