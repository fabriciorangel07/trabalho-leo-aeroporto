import React from "react"

const Aluno = props => {
    let sit = props.nota >= 6 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2> {props.nome} </h2>
            <p>
                Sua nota é
                <strong> {props.nota} </strong>
                e sua situação é
                <strong> {sit} </strong>
            </p>
        </div>
    )
}

export default Aluno