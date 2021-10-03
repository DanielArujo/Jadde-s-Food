
import Container from "./styled"
import Rodape from "../../components/comum/rodape"

export default function Create(){
    return(
        <Container>
            <div class="box-principal">
                <div class="Voltar"> <a href="/login"> <button>Voltar</button> </a></div>
                <div class="titulo">Criar Conta</div>
                <div class="box-login">
                    <div class="box-inputs-esquerda">
                        <div class="input-login">
                            <div class="info-login"><b> Nome: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b>E-mail: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b> CPF: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b> Senha: </b></div>
                            <input />
                        </div>
                    </div>
                    <div class="box-inputs-direita">
                        <div class="input-login">
                            <div class="info-login"><b> Telefone: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b>Endereço: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b> CEP: </b></div>
                            <input />
                        </div>
                        <div class="input-login">
                            <div class="info-login"><b> Número da Residência: </b></div>
                            <input />
                        </div>
                    </div>    
                </div>
                <div class="criar-conta"> <button>Criar Conta</button> </div>
            </div>
            <Rodape />
        </Container>
    )
}