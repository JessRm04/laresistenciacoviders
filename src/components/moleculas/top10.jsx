import React from 'react'
import Top10Component from "../atomos/Top10Component.jsx"
import coronavirus from '../../img/coronavirus.png'



function Top10 ({src, country, numbers}){
    
    const ciudad = "country"
    const number = "0000"
    const co = {coronavirus}
    return(
       <div>
            <Top10Component src={co} country={ciudad} numbers={number}/>
       </div>
        )}

export default Top10;