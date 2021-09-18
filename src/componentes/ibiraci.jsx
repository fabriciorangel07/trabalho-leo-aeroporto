import React from "react"

const ibiraci = props => {
    //let min = props.min
    //let max = props.max
    let { min, max } = props
    let numero = parseInt(Math.random() * (max - min)) + min
    return (
        <React.Fragment>
            <h2>Ibiraci City</h2>
            <p>
                <strong>Rio de Janeiro</strong> com destino a <strong>Ibiraci</strong>
                <br />
                <br />
                <br />
                <strong>Saída</strong> as 09:30hr
            </p>
        </React.Fragment>
    )
}

export default ibiraci