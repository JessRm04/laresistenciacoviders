import React from 'react'
import Auriculares from "../../../assets/img/img/icons/auriculares.png"
import Flecha from "../../../assets/img/img/icons/flecha.png"
import Carrito from "../../../assets/img/img/icons/carrito.png"
import "../buttons/buttons.css"

function Buttons() {
  return (
    <div className='containerBtn'>
        <img src={Flecha} className="btn1" alt="Arrow"/>
        <img src={Auriculares} className="btn1" alt="Headphones"/>
        <img src={Carrito} className="btn1" alt="Carro"/>
    </div>
  )
}

export default Buttons;