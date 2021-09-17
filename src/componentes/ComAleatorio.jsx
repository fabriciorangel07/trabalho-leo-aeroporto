import React from "react"

const Alea = props => {
    //let min = props.min
    //let max = props.max
    let { min, max } = props
    let numero = parseInt(Math.random() * (max - min)) + min
    return (
        <React.Fragment>
            <p>
                <b>Valor minimo: </b> {props.min}
            </p>

            <p>
                <b>Valor maximo </b> {props.max}
            </p>

            <p>
                <b>Número escolhido </b> {numero}
            </p>
        </React.Fragment>
    )
}

export default Alea