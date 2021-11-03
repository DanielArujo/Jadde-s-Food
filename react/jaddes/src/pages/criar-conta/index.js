
import Container from "./styled"
import Rodape from "../../components/comum/rodape"

export default function Create(){
    return(
        <Container>
            <div className="box-principal">
                <div className="Voltar"> <a href="/login"> <button>Voltar</button> </a></div>
                <div className="titulo">Criar Conta</div>
                <div className="box-login">
                    <div className="box-inputs-esquerda">
                        <div className="input-login">
                            <div className="info-login"><b> Nome: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>E-mail: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> CPF: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> Senha: </b></div>
                            <input />
                        </div>
                    </div>
                    <div className="box-inputs-direita">
                        <div className="input-login">
                            <div className="info-login"><b> Telefone: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b>Endereço: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> CEP: </b></div>
                            <input />
                        </div>
                        <div className="input-login">
                            <div className="info-login"><b> Número da Residência: </b></div>
                            <input />
                        </div>
                    </div>    
                </div>
                <div className="criar-conta"> <button>Criar Conta</button> </div>
            </div>
            <Rodape />
        </Container>
    )
}