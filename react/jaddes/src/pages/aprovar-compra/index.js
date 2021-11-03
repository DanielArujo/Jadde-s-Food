
import Container from "./styled";
import AprovarItem from "../../components/comum/aprovar-item";

export default function Aprovar(){
    return(
        <Container>
            <div className="Barra">
                <div className="box-text-cabecalho"> 
                    <div className="NomeAdm">Perfil Administrador</div>
                    <div className="img-adm"> <img src="https://image.flaticon.com/icons/png/512/306/306222.png" alt="" /></div>
                    <div className="texto"> Seja bem vindo volta</div>
                </div>
                <div className="img-sair"> <img src="https://image.flaticon.com/icons/png/512/277/277575.png" alt="" /></div>
            </div>
            
            <div className="background-informacoes">
                <div className="Informacoes"> Aprovar Produtos </div>
                <div className="box-funcionalidades">
                    <div className="box-aprovar">
                        <div className="aprovar-esquerda">
                        <AprovarItem />
                        <AprovarItem />
                        </div>
                        
                        <div className="aprovar-direita">
                        <AprovarItem />
                        <AprovarItem />
                        </div>  
                    </div>  
                </div>
            </div>
            <div className="Faixa"></div>
        </Container>
    )
}