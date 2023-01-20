import React from 'react'
import Wash from '../../../../assets/img/wash.png'
import './landing-view-wash.css'

function Washed() {
  return (
    <div className='containerWashed'>
        <div className='titlesWash'>
            <h5 className='subtitle'>Wash</h5>
            <h2 className='titleWashed'>Wash Your Hangs min 20 Second</h2>
        </div>    
        <div className='imgWashed'>
            <img src={Wash} alt="hand washing"/>
        </div>
    </div>
  )
}

export default Washed;