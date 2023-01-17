import React from 'react';
import covidred from '../../../../assets/img/covidred.svg';
import covidblue from '../../../../assets/img/covidblue.svg';
import covidorange from '../../../../assets/img/covidorange.svg';
import covidgreen from '../../../../assets/img/covidgreen.svg';
import telephone from '../../../../assets/img/telephone.svg';
import '../tracker-dos/tracker-dos.css';
import Desplegable from './Mol-tracker-dos-desplegable';
import DataApiAll from '../../../../services/Services-data-api-all';


const TrackerDosWorld = () => {

    const responseData = DataApiAll();

    return (
<>
<Desplegable />
    {responseData && (
<div className='track2'>
    <div className='container-colum'>
    <div className='div1'>
        <div className='casos'>
            <h5>Total Cases</h5>
        <div className="linea" >
            <hr width="100%" />
        </div>
            <h2>{responseData.cases}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidblue} alt="virus" width="100px" />
        </div>
    </div>
        
    <div className='div2'>
        <div className='casos'>
            <h5>Total Deaths</h5>
            <hr />
            <h2>{responseData.deaths}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidred} alt="virus" width="100px" />
        </div>
    </div>
    <div className='div3'>
        <div className='casos'>
            <h5>Total Recovered</h5>
            <hr />
            <h2>{responseData.recovered}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidgreen} alt="virus" width="100px" />
        </div>
    </div>
    
   
    <div className='div4'>
        <div className='casos'>
            <h5>Total Active</h5>
            <hr />
            <h2>{responseData.active}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidblue} alt="virus" width="100px" />
        </div>
    </div>

    <div className='div5'>
        <div className='casos'>
            <h5>New Cases</h5>
            <hr />
            <h2>{responseData.todayCases}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidorange} alt="virus" width="100px" />
        </div>
    </div>

    <div className='div6'>
        <div className='casos'>
            <h5>New Deaths</h5>
            <hr />
            <h2>{0}</h2>
        </div>
        <div className='virus-v'>
            <img className="virus" src={covidred} alt="virus" width="100px" />
        </div>
    </div>
    </div>
    <div className='container-colum-h'>
    <div className='container-casos-h'>
        <div className='virus-h'>
            <img className="virus" src={covidblue} alt="virus" width="40px" />
        </div>
        <div className='confirmed'>
            <h6>Total Confirmed</h6>
            <h3>{responseData.cases}</h3>
        </div>
    </div>

    <div className='container-casos-h'>
        <div className='virus-h'>
            <img className="virus" src={covidgreen} alt="virus" width="40px" />
        </div>
        <div className='confirmed'>
            <h6>Total Recovered</h6>
            <h3>{responseData.recovered}</h3>
        </div>
    </div>
    
    <div className='container-casos-h'>
        <div className='virus-h'>
            <img className="virus" src={covidred} alt="virus" width="40px" />
        </div>
        <div className='confirmed'>
            <h6>Total Deadths</h6>
            <h3>{responseData.deaths}</h3>
        </div>
    </div>
    
    <div className='container-casos-h'>
        <div className='virus-h'>
            <img className="virus" src={covidred} alt="virus" width="40px" />
        </div>
        <div className='confirmed'>
            <h6>New Deadths</h6>
            <h3>{0}</h3>
        </div>
    </div>
    
    <div className='container-casos-h'>
        <div className='virus-h'>
            <img className="virus" src={telephone} alt="phone" width="40px" />
        </div>
        <div className='confirmed'>
            <h6>Help Line No.</h6>
            <h3>198</h3>
        </div>
    </div>
    </div>
    
</div>
)}
</> 

  );
}

export default TrackerDosWorld;





