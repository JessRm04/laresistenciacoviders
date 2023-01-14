import React from 'react'
import "./top10country.css"


const top10 = ({img, country, numbers}) => {
    return <div className="top10container">
        <div>
            <img src={img} alt="bandera"></img>
            <p>{country}</p>
        </div>
        <div>
            <h5>{numbers}</h5>
        </div>
    </div>

}

export default top10;