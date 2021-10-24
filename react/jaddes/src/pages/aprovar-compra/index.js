
import Container from "./styled";
import AprovarItem from "../../components/comum/aprovar-item";

export default function Aprovar(){
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
                <div class="Informacoes"> Aprovar Produtos </div>
                <div class="box-funcionalidades">
                    <div class="box-aprovar">
                        <div class="aprovar-esquerda">
                        <AprovarItem />
                        <AprovarItem />
                        </div>
                        
                        <div class="aprovar-direita">
                        <AprovarItem />
                        <AprovarItem />
                        </div>  
                    </div>  
                </div>
            </div>
            <div class="Faixa"></div>
        </Container>
    )
}