import React, { useState } from "react"

function getRandom(max) {
    return Math.floor(Math.random() * 10000)
};

function App() {

    const [diminuir, setCount] = useState(30);

    const add = () => { setCount(diminuir + 1) };
    const sub = () => { setCount(diminuir - 1) };

    {
        return (
            <div>
                <h2 class="voo">{<div>Voo nº {[getRandom()]}</div>}</h2>
                <p class="texto">
                    <strong>Franca</strong> com destino a <strong>Tokyo</strong>
                    <br />
                    <br />
                    <strong>Saída</strong> as 02:40hrs
                    <br />
                    <br />
                    {diminuir > 0 ?
                        (<div>
                            Vagas disponiveis: {diminuir}
                        </div>) :
                        (<div id="alerta"> Não existem mais assentos disponiveis! </div>)
                    }
                    <div class="formulario">
                        <div class="col-2 off-1">
                            <ul class="acoes">
                                <li><button onClick={sub} class="style1">Reservar</button></li>
                                <li><button onClick={add} class="style2">Cancelar</button></li>
                            </ul>
                        </div>
                    </div>
                </p>
            </div>
        )
    }
}

export default App