import React from "react"

const ibiraci = props => {
    return (
        <React.Fragment>
            <h2 class="voo">Voo nº 000.018</h2>
            <p class="texto">
                <strong>Franca</strong> com destino a <strong>Ibiraci</strong>
                <br />
                <br />
                <strong>Saída</strong> as 07:15hr
                <br />
                <br />
                {props.diminuir > 0 ?
                    (<div>
                        Vagas disponiveis: {props.diminuir}
                    </div>):
                    (<div id="alerta"> Não existem mais assentos disponiveis! </div>)
                }
                <div class="formulario">
                    <div class="col-2 off-1">
                        <ul class="acoes">
                            <li><button onClick={props.sub} class="style1">Reservar</button></li>
                            <li><button onClick={props.add} class="style2">Cancelar</button></li>
                        </ul>
                    </div>
                </div>
            </p>
        </React.Fragment>
    )
}

export default ibiraci