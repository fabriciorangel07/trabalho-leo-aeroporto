export default function riodejaneiro(props)
{
    return (
        <div>
            <h2>Voo nº 102.112</h2>
            <p>
                <strong>Franca</strong> com destino ao <strong>Rio de Janeiro</strong>
                <br />
                <br />
                <br />
                <strong>Saída</strong> as 09:30hr

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