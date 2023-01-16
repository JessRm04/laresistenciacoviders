import React from 'react'
import Wash from '../../../../assets/img/wash.png'
import '../../landing/landing-view-wash/landing-view-wash.css'

function Washed() {
  return (
    <div className='containerWashed'>
        <div className='title'>
            <h5>Wash</h5>
            <p className='titleWashed'>Wash Your Hangs min 20 Second</p>
        </div>    
        <div className='imgWashed'>
            <img src={Wash} alt="hand washing"/>
        </div>
    </div>
  )
}

export default Washed;