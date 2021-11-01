export default function cancun(props)
{
    return (
        <div>
            <h2 class="voo">Voo nº 041.202</h2>
            <p class="texto">
                <strong>Franca</strong> com destino a <strong>Cancun - MX</strong>
                <br />
                <br />
                <strong>Saída</strong> as 21:00hrs
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
        </div>
    )
}
