import Container from "./styled";


export default function Management(props){

    function deletar(){
        let r = props.onDelete(props.info.id_produto)
        console.log(props.info.id);
    }

    return(
        <Container>
            <div className="img"> <img src={props.info.ds_imagem} alt="" /> </div>
            <div className="produto-info">
                <div className="name"> {props.info.nm_produto}  </div>
                <div> {props.info.nr_codigo}  </div>
            </div>
            <div className="box-botoes">
                <div className="alterar"> <button> Alterar</button></div>
                <div className="deletar"> <button onClick={deletar}> Deletar</button></div>
            </div>
        </Container>
    )
}