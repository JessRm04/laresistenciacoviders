import React from 'react'
import "./top10country.css"


const top10 = ({flag, country, numbers}) => {
    return <div className="top10container">
        <div className="leftContainer">
            <img className="flag" src={flag} alt="bandera"></img>
            <p className="country">{country}</p>
        </div>
        <div>
            <h4 className="numbers">{numbers}</h4>
        </div>
    </div>

}

export default top10;