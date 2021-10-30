export default function paris(props)
{
    return (
        <div>
            <h2 class="voo">Voo nº 888.999</h2>
            <p class="texto">
                <strong>Franca</strong> com destino a <strong>Paris</strong>
                <br />
                <br />
                <strong>Saída</strong> as 17:45hrs
                <br />
                <br />
                {props.diminuir.length > 0 ?
                    (<div>
                        Vagas disponiveis: {props.diminuir[props.diminuir.length -1]}
                    </div>):
                    (<div>Não existem mais assentos disponiveis!</div>)
                }
                <div class="formulario">
                    <div class="col-2 off-1">
                        <ul class="acoes">
                            <li><button onClick={props.Decrementar} class="style1">Reservar</button></li>
                            <li><button onClick={props.Decrementar} class="style2">Cancelar</button></li>
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    )
}