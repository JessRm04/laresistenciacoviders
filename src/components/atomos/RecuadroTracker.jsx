import React from 'react'
import '../atomos/recuadroTrackerStyle.css'

const Recuadro = ({texto, numeros}) => {
    return <div className="recuadroStyle">
    <h3>{texto}</h3>
    <h2>{numeros}</h2>
    </div>
}

export default Recuadro;