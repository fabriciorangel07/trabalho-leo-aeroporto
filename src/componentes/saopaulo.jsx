export default function saopaulo(props)
{
    return (
        <div>
            <h2 class="voo">Voo nº 341.002</h2>
            <p>
                <strong>Franca</strong> com destino a <strong>São Paulo</strong>
                <br />
                <br />
                <strong>Saída</strong> as 19:30hrs
                {props.diminuir.length > 0 ?
                    (                <div>
                        Vagas dispinoniveis: {props.diminuir[props.diminuir.length -1]}
                    </div>): (<div>Não existem assentos disponiveis!</div>)
                }

                <div class="formulario">
                    <div class="col-2 off-1">
                        <ul class="acoes">
                            <li><button onClick={props.Decrementar} class="style1">Reservar</button></li>
                            
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    )
}