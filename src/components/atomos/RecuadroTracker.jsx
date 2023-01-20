import React from 'react'
import '../atomos/recuadroTrackerStyle.css'

const Recuadro = ({texto, numeros, clase}) => {
    return <div className={clase}>
    <h4 className="textoStyle">{texto}</h4>
    <h2>{numeros}</h2>
    </div>
}

export default Recuadro;