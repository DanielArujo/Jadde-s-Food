import { Link } from "react-router-dom"
import Container from "./styled"

export default function Rodape(){
    return(
            <Container>
                
                    <Link to ={'/home'}><div className="box-name-rodape" >
                        <div className="name-restaurant-rodape">Jadde's</div>
                        <div className="second-name-restaurant-rodape">Food</div>
                    </div></Link>
                    <div className="box-rodape-informations">
                        <div className="text-redes-sociais">
                            <div>Nos siga em nossas redes sociais, e fique atento para novas ofertas</div>
                            <div className="box-redes-sociais">
                                <div className="insta"> <button><img src="./assets/images/insta.png" alt="" /> </button> </div>
                                <div className="twitter"><button> <img src="../assets/images/twitter.svg" alt="" /> </button> </div>
                                <div className="face"><button> <img src="../assets/images/face.svg" alt="" /> </button> </div>
                            </div>
                        </div>
                        <div className="mapa"> <img src="../assets/images/map.svg" alt="" /> </div>
                    </div>
                
            </Container>
    )
}