import React from "react"
import './App.css'
import Cartao from "./layout/Cartao";
import Componente1 from './componentes/saopaulo';
import Componente2 from './componentes/riodejaneiro';
import Aluno from './componentes/ribeirao';
import CompAleatorio from './componentes/ibiraci';

const App = () => {
    return (
        <div className="App">
            <h2>Escalas</h2>
            <div className="Cartoes">
                <Cartao titulo="Destino a São Paulo">
                    <Componente1/>
                </Cartao>

                <Cartao titulo="Destino ao Rio de Janeiro"
                    color = '#AA5EE0'>
                    <Componente2/>
                </Cartao>

                <Cartao titulo="Destino Ribeirão Preto"
                    color = "#49DCE0">
                    <Aluno/>
                </Cartao>

                <Cartao titulo="Destino a Ibiraci">
                    <CompAleatorio/>
                </Cartao>
            </div>
        </div>
    )
}

export default App