import React from "react"
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

const App = () => {
    return (
        <div className="App">
            <div class= "menu">
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
                    color = "#0C1F1D">
                    <Componente1/>
                </Cartao>

                <Cartao titulo="Destino ao Rio de Janeiro"
                    color = "#0C1F1D">
                    <Componente2/>
                </Cartao>

                <Cartao titulo="Destino Ribeirão Preto"
                    color = "#0C1F1D">
                    <Componente3/>
                </Cartao>

                <Cartao titulo="Destino a Ibiraci"
                    color = "#0C1F1D">
                    <Componente4/>
                </Cartao>

                <Cartao titulo="Destino a Paris"
                    color = "#0C1F1D">
                    <Componente5/>
                </Cartao>

                <Cartao titulo="Destino a Manaus"
                    color = "#0C1F1D">
                    <Componente6/>
                </Cartao>

                <Cartao titulo="Destino a Tokyo"
                    color = "#0C1F1D">
                    <Componente7/>
                </Cartao>

                <Cartao titulo="Destino a Cancun"
                    color = "#0C1F1D">
                    <Componente8/>
                </Cartao>

                <Cartao titulo="Destino a Restinga"
                    color = "#0C1F1D">
                    <Componente9/>
                </Cartao>

                <Cartao titulo="Destino a Alagoas"
                     color = "#0C1F1D">
                    <Componente10/>
                </Cartao>
            </div>
        </div>
    )
}

export default App