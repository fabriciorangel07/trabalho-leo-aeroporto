/*export default _ => (

)*/

import React from "react"
import './App.css'
import Cartao from "./layout/Cartao";
import Componente1 from './componentes/saopaulo';
import Componente2 from './componentes/riodejaneiro';
import Aluno from './componentes/franca';
import CompAleatorio from './componentes/ibiraci';

const App = () => {
    return (
        <div className="App">
            <h2>Escalas</h2>
            <div className="Cartoes">
                <Cartao titulo="Destino a São Paulo"
                    color = '#FB2'
                    radio = {20}>
                    <Componente1 />
                </Cartao>

                <Cartao titulo="Destino ao Rio de Janeiro"
                    color = '#AA5EE0'>
                    <Componente2
                        titulo="Aooopa garotada do React"
                        subtitulo="O trem é brabo!!!"
                        numero={9}
                    />
                </Cartao>

                <Cartao titulo="Destino Franca"
                    color = "#49DCE0">
                    <Aluno
                        nome="Franca City"/>
                </Cartao>

                <Cartao titulo="Destino a Ibiraci">
                    <CompAleatorio min={5}
                        max={100}>
                    </CompAleatorio>
                </Cartao>
            </div>
        </div>
    )
}
const App2 = () => {
    return (
        <div className="App">
            <h2>Fundamentos</h2>
            <div className="Cartoes">
                <Cartao titulo="Primeiro Componente"
                    color = '#FB2'
                    radio = {20}>
                    <Componente1 />
                </Cartao>

                <Cartao titulo="Segundo componente"
                    color = '#AA5EE0'>
                    <Componente2
                        titulo="Aooopa garotada do React"
                        subtitulo="O trem é brabo!!!"
                        numero={9}
                    />
                </Cartao>

                <Cartao titulo="Aluno/Escola"
                    color = "#49DCE0">
                    <Aluno
                        nome="Fulano"
                        nota={6.3} />
                </Cartao>


                <Cartao titulo="Número Aleatorio">
                    <CompAleatorio min={5}
                        max={100}>
                    </CompAleatorio>
                </Cartao>
            </div>
        </div>
    )
}

export default App