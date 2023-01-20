import React from 'react'
import "../render/landing/landing-prevent/landing-prevent.css";
import PreventLandingCard from '../render/landing/landing-prevent/Landing-prevent-card';
import bannerright from "../../assets/img/img/icons/bannerright.png"
import icon2 from "../../assets/img/img/prevent/icon2.png"
import icon4 from "../../assets/img/img/prevent/icon4.png"
import icon5 from "../../assets/img/img/prevent/icon5.png"
import icon6 from "../../assets/img/img/prevent/icon6.png"
import icon7 from "../../assets/img/img/prevent/icon7.png"


const PreventLanding = () => {

    
    return (
    <div className="pageContainer">
        <div className="header">
            <h3 className='prevent'>Prevent</h3>
            <h1 className="bestway">Best way to prevent is avoid virus.</h1>
        </div>
        <div className="cardsContainer">
            <div>
                <PreventLandingCard image={icon2} title="Personal contact" paragraph="Fever is a key sympton, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"/>
                <PreventLandingCard image={icon5} title="Social distancing" paragraph="Hands  touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick."/>
                <PreventLandingCard image={icon6} title="Clean And Disinfect" paragraph="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"/>
            </div>
            <div>
                <PreventLandingCard image={icon4} title="Wash Hands" paragraph="Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected."/>
                <PreventLandingCard image={icon7} title="Respiratory hygiene" paragraph="Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze."/>
                <PreventLandingCard image={bannerright} title="Wear a facemask" paragraph="Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales."/>
            </div>
        </div>
    </div>
    );
}


export default PreventLanding;