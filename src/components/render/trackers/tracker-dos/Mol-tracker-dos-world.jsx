import React from 'react';
import covidred from '../../../../assets/img/covidred.svg';
import covidblue from '../../../../assets/img/covidblue.svg';
import covidgreen from '../../../../assets/img/covidgreen.svg';
import telephone from '../../../../assets/img/telephone.svg';
import '../tracker-dos/tracker-dos.css';
import DataApiAll from '../../../../services/Services-data-api-all';


const MolTrackerDosWorld = () => {

    const responseData = DataApiAll();

    return (
<>

    {responseData && (
<div className='track2'>
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
        <hr/>
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

export default MolTrackerDosWorld;





