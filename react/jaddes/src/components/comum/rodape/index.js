import Container from "./styled"

export default function Rodape(){
    return(
            <Container>
                <div class="box-name-rodape">
                    <div class="name-restaurant-rodape">Jadde's</div>
                    <div class="second-name-restaurant-rodape">Food</div>
                </div>
                <div class="box-rodape-informations">
                    <div class="text-redes-sociais">
                        <div>Nos siga em nossas redes sociais, e fique atento para novas ofertas</div>
                        <div class="box-redes-sociais">
                            <div class="insta"> <button><img src="../assets/images/insta.svg" alt="" /> </button> </div>
                            <div class="twitter"><button> <img src="../assets/images/twitter.svg" alt="" /> </button> </div>
                            <div class="face"><button> <img src="../assets/images/face.svg" alt="" /> </button> </div>
                        </div>
                    </div>
                    <div class="mapa"> <img src="../assets/images/map.svg" alt="" /> </div>
                </div>
            </Container>
    )
}