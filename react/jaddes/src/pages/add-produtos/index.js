import Container from "./styled";


export default function AddProdutos(){
    return(
        <Container>
            <div class="Barra">
            <div class="box-text-cabecalho"> 
                <div class="NomeAdm">Perfil Administrador</div>
                <div class="img-adm"> <img src="https://image.flaticon.com/icons/png/512/306/306222.png" alt="" /></div>
                <div class="texto"> Seja bem vindo volta</div>
            </div>
            <div class="img-sair"> <img src="https://image.flaticon.com/icons/png/512/277/277575.png" alt="" /></div>
        </div>
        
        <div class="background-informacoes">
            <div class="Informacoes"> Adicionar Produtos </div>
            <div class="box-funcionalidades">
                <div class="addProduto">
                    <div class="box-inputs">
                        <div class="inputs-esquerda">
                            <div>  <input placeholder="Produto:" /></div>
                            <div>  <input placeholder="Categoria:" /></div>
                            <div>  <input placeholder="Codigo:" /></div>
                        </div>
                        <div class="inputs-direita">
                            <div> <input placeholder="Descrição:" /></div>
                            <div>  <input placeholder="Imagem:" /></div>
                            <div>  <input placeholder="Preço:" /></div>
                        </div>  
                    </div>  
                    <div class="add"> <button>Adicionar Produto</button></div>
                </div>
            </div>
        </div>
        <div class="Faixa"></div>
        </Container>
    )
}