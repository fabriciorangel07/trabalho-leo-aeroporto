import './App.css'
import Cartao from "./layout/Cartao";
import Componente1 from './componentes/saopaulo';
import Componente2 from './componentes/riodejaneiro';
import Componente3 from './componentes/ribeirao';
import Componente4 from './componentes/ibiraci';
import Componente5 from './componentes/paris';
import Componente6 from './componentes/manaus';
import Componente7 from './componentes/tokyo';
import Componente8 from './componentes/cancun';
import Componente9 from './componentes/restinga';
import Componente10 from './componentes/alagoas';
import image from './img/instagram.png';
import image1 from './img/whatsapp.png';
import image2 from './img/facebook.png';
import image3 from './img/twitter.png';
import image4 from './img/gmail.png';
import image5 from './img/youtube.png';


function App() {

    return (
        <div className="App">
            <div class="menu">
                <ul>
                    <li><a href="index.html" id="inicio">Inicio</a></li>
                    <li><a href="#">Companhias</a></li>
                    <li><a href="#">Informações</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#"><img id="img_insta" target="_blank" rel="external" title="Instagram" src={image} /></a></li>
                    <li><a href="#"><img id="img" target="_blank" rel="external" title="Whastapp" src={image1} /></a></li>
                    <li><a href="#"><img id="img" target="_blank" rel="external" title="Facebook" src={image2} /></a></li>
                </ul>
            </div>
            <div className="Cartoes">
                <Cartao titulo="Destino a São Paulo"
                    color="#0C1F1D">
                    <Componente1 />
                </Cartao>

                <Cartao titulo="Destino ao Rio de Janeiro"
                    color="#0C1F1D">
                    <Componente2 />
                </Cartao>

                <Cartao titulo="Destino Ribeirão Preto"
                    color="#0C1F1D">
                    <Componente3 />
                </Cartao>

                <Cartao titulo="Destino a Ibiraci"
                    color="#0C1F1D">
                    <Componente4 />
                </Cartao>

                <Cartao titulo="Destino a Paris"
                    color="#0C1F1D">
                    <Componente5 />
                </Cartao>

                <Cartao titulo="Destino a Manaus"
                    color="#0C1F1D">
                    <Componente6 />
                </Cartao>

                <Cartao titulo="Destino a Tokyo"
                    color="#0C1F1D">
                    <Componente7 />
                </Cartao>

                <Cartao titulo="Destino a Cancun"
                    color="#0C1F1D">
                    <Componente8 />
                </Cartao>

                <Cartao titulo="Destino a Restinga"
                    color="#0C1F1D">
                    <Componente9 />
                </Cartao>

                <Cartao titulo="Destino a Alagoas"
                    color="#0C1F1D">
                    <Componente10 />
                </Cartao>
                <section className="footer1">
                    <div class="footer">
                        <section>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="Instagram" src={image} />
                            </a>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="Whastapp" src={image1} />
                            </a>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="Facebook" src={image2} />
                            </a>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="Twitter" src={image3} />
                            </a>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="gmail" src={image4} />
                            </a>
                            <a href="#">
                                <img id="img" target="_blank" rel="external" title="youtube" src={image5} />
                            </a>
                        </section>
                    </div>
                </section>
                <section className="footer2">
                    <div class="formulario">
                        <div class="footer">
                            <section>
                                <h3>Endereço</h3>
                                <p>
                                    Rua Dos Aeroportos, nº 0000<br />
                                    Parque das Aeronovas<br />
                                    Boeing - SP, CEP 14400-000
                                </p>
                            </section>
                        </div>
                        <div class="footer">
                            <section>
                                <h3>E-mail</h3>
                                <p>
                                    <a href="#" target="_blank" rel="external" class="social">aeroporto@hotmail.com</a>
                                </p>
                            </section>
                        </div>
                        <div class="footer">
                            <section>
                                <h3>Telefone</h3>
                                <p>
                                    (xx) 12345-6789
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App