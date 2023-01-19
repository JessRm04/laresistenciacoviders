import React from 'react'
import "./top10country.css"



const top10 = ({flag, country, numbers, id}) => {
    return <div className="top10container">
        <div className="leftContainer">
            <img className="flag" src={flag} alt="bandera"/>
            <p key={id} className="country">{country}</p>
        </div>
        <div>
            <h4 className="numbers">{numbers}</h4>
        </div>
    </div>

}

export default top10;