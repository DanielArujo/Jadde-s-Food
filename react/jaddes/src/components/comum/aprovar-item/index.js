import Container from "./styled";


export default function AprovarItem(){
    return(
        <Container>
            <button> X </button>
            <div class="aprovar">
                <div class="img-cliente">
                    <img src="../assets/images/img-cliente.svg" alt="" />
                    
                </div>
                <div class="aprovar-info">
                    <div class="text-info">Nome:</div>
                    <div class="text-info">Itens:</div>
                    <div class="text-info">Valor:</div>
                    <div class="text-info">Endereço:</div>
                </div>
            </div>
        </Container>
    )
}