import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./styled";


export default function Management(props) {

    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [img, setImg] = useState('');
    const [codigo, setCodigo] = useState('');
    const [isChange, setIsChange] = useState(false)

    function deletar() {
        props.onDelete(props.info.id_produto)
        console.log(props.info.id);
    }

    function alterar() {
        props.onChange(props.info.id_produto, produto, valor, descricao, categoria, img, codigo)
        console.log(produto);
        setIsChange(false);
    }


    function onCh() {
        setProduto();
        setValor();
        setDescricao();
        setCategoria();
        setImg();
        setCodigo();
        setIsChange(true);
    }



    return (
        <Container>
            <div className="top-info">
                
                {isChange === false ? 
                    <div>
                    <div className="img"> <img src={props.info.ds_imagem} alt="" /> </div>
                    <div><b>Nome: </b>{props.info.nm_produto}  </div>
                    <div><b>Codigo: </b>{props.info.nr_codigo}</div>
                    <div><b>Preço: </b>{props.info.vl_produto}  </div>
                    <div><b>Categoria: </b>{props.info.ds_categoria}  </div>
                    </div>
                :
                    <div>
                        <input placeholder={props.info.ds_imagem}
                        type="text" value={img} onChange={e => setImg(e.target.value)} />

                        <input placeholder={props.info.nm_produto}
                        type="text" value={produto} onChange={e => setProduto(e.target.value)} />
                    
                        <input placeholder={props.info.nr_codigo}
                        type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />


                        <input placeholder={props.info.vl_produto}
                        type="text" value={valor} onChange={e => setValor(e.target.value)} />
                    </div>
                    
                }
                
                {isChange === false ? <div className="img"> <img src={props.info.ds_imagem} alt="" /> </div> : <input placeholder={props.info.ds_imagem}
                    type="text" value={img} onChange={e => setImg(e.target.value)} />}
                <div className="produto-info">
                    {isChange === false ? <div><b>Nome: </b>{props.info.nm_produto}  </div> : <input placeholder={props.info.nm_produto}
                        type="text" value={produto} onChange={e => setProduto(e.target.value)} />}

                    {isChange === false ? <div><b>Codigo: </b>{props.info.nr_codigo}  </div> : <input placeholder={props.info.nr_codigo}
                        type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />}
                    {isChange === false ? <div><b>Preço: </b>{props.info.vl_produto}  </div> : <input placeholder={props.info.vl_produto}
                        type="text" value={valor} onChange={e => setValor(e.target.value)} />}
                    {isChange === false ? <div><b>Categoria: </b>{props.info.ds_categoria}  </div> : <input placeholder={props.info.ds_categoria}
                        type="text" value={categoria} onChange={e => setCategoria(e.target.value)} />}
                </div>
                <div className="box-botoes">
                    <div className="alterar"> <button onClick={onCh}> Alterar</button></div>
                    <div className="deletar"> <button onClick={deletar}> Deletar</button></div>
                    <div className="deletar"> <button onClick={alterar}> Confirmar</button></div>
                </div>
            </div>
            <div className="desc">
                {isChange === false ? <div><b>Descrição: </b>{props.info.ds_produto}  </div> : <input placeholder={props.info.ds_produto}
                    type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />}
            </div>
        </Container>
    )
}