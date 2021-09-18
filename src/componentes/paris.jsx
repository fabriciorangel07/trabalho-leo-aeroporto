export default function paris()
{
    return (
        <div>
            <h2 class="voo">Voo nº 888.999</h2>
            <p>
                <strong>Franca</strong> com destino a <strong>Paris</strong>
                <br />
                <br />
                <strong>Saída</strong> as 17:45hrs
                <div>
                <p>Assentos Disponiveis:</p>
                    <ul class="assentos">1 2 3 4 5</ul> 
                </div>
                <div>
                <p>Assentos Ocupados:</p>
                    <ul class="ocupados">6 7 8 9 10</ul> 
                </div>
                <div class="formulario">
                    <div class="col-2 off-1">
                        <ul class="acoes">
                            <li><input type="submit" class="style1" value="Reservar" /></li>
                            <li><input type="reset" class="style2" value="Limpar" /></li>
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    )
}