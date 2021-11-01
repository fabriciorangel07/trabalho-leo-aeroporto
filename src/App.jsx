import React, { useState, setState } from "react"
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

const App = () => {

    const Decrementar = () => {
        let aux = diminuir
        aux.pop()
        setDiminuir([...aux])
    }

    const [diminuir, setDiminuir] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    return (
        <div className="App">
            <header>
                <div class="instagram">
                    <a href="#" >
                        <img id="img" alt="Instagram" src={image} />
                    </a>
                </div>
            </header>
            <div class="menu">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#">Companhias</a></li>
                    <li><a href="#">Informações</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="Cartoes">
                <Cartao titulo="Destino a São Paulo"
                    color="#0C1F1D">
                    <Componente1 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino ao Rio de Janeiro"
                    color="#0C1F1D">
                    <Componente2 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino Ribeirão Preto"
                    color="#0C1F1D">
                    <Componente3 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Ibiraci"
                    color="#0C1F1D">
                    <Componente4 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Paris"
                    color="#0C1F1D">
                    <Componente5 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Manaus"
                    color="#0C1F1D">
                    <Componente6 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Tokyo"
                    color="#0C1F1D">
                    <Componente7 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Cancun"
                    color="#0C1F1D">
                    <Componente8 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Restinga"
                    color="#0C1F1D">
                    <Componente9 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>

                <Cartao titulo="Destino a Alagoas"
                    color="#0C1F1D">
                    <Componente10 Decrementar={Decrementar} diminuir={diminuir} />
                </Cartao>
                <section className="footer1">
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
                                <h3>Midias Sociais</h3>
                                <p>
                                    <a href="#" target="_blank"
                                        rel="external" class="social">instagram.com/Aeroporto</a><br />
                                    <a
                                        href="#" target="_blank"
                                        rel="external" class="social">facebook.com/Aeroporto</a>
                                </p>
                            </section>
                        </div>
                        <div class="footer">
                            <section>
                                <h3>Email</h3>
                                <p>
                                    <a href="aeroporto@hotmail.com" target="_blank" rel="external" class="social">aeroporto@hotmail.com</a>
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

    )
}

export default App