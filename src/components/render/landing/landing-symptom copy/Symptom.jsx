import React from 'react';
import './symptom.css';
import 'bootstrap/dist/css/bootstrap.css';
import bannerright from '../../../../assets/img/img/icons/bannerright.png';
import cough from '../../../../assets/img/img/icons/cough.png';
import sore from '../../../../assets/img/img/icons/sore.png';
import { Link } from 'react-router-dom';
import Spreads from '../landing-spreads/Spreads';
import Question from '../landing-view-questions/landing-view-question';
import Washed from '../landing-view-wash/landing-view-wash';
import LandingMobile from '../landing-mobile/Landing-mobile';
import News from '../landing-news/News';
import Footer from '../footer/Footer';

const Symptom = () => {
  return (
    <>
   <div class="page-nav padding-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="section-title text-center">
                            <h2 class="text-white mb-3">Qurantine</h2>
                            <ul class="list-inline">
                                <li class="list-inline-item"><Link to="/" class="text-white">Home</Link></li>
                                <li class="list-inline-item"><Link to="qurantine" class="text-white">Qurantine</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <section className="symptom mt-5 mb-5 container">
        <h3 className="symptonpeq text-center fs-5">Symptom</h3>
        <h2 className="symptonxl text-center display-3 fw-bold">
          Basic Symptom Against Corona virus
        </h2>
        <div className="symptom-cards-content mt-5 row">
          <div className="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div className="symptoncard card p-3 shadow border-0">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={bannerright} alt="banner-img" width="180px"/>
              </div>
  
              <h3 className="fw-bold mb-3 text-center titleCard">
                Anches and pains
              </h3>
              <p className="mb-3 text-start text-blue-secondary">
                Fever is a key symptom, experts say. Don't fixate on a number, but
                khow it's really not a fever until your temperature reaches at
                least 100
              </p>
            </div>
          </div>
          <div className="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div className="symptoncard card p-3 shadow border-0">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={cough} alt="banner-img" />
              </div>
  
              <h3 className="fw-bold mb-3 text-center titleCard">
                Runny nose
              </h3>
              <p className="mb-3 text-start text-blue-secondary">
                People of all ages who experience fever and/or cough associated
                withdifficulty breathing/shortness of breath
              </p>
            </div>
          </div>
          <div className="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div className="symptoncard card p-3 shadow border-0">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={sore} alt="banner-img" />
              </div>
  
              <h3 className="fw-bold mb-3 text-center titleCard">
                Sore throat
              </h3>
              <p className="mb-3 text-start text-blue-secondary">
                Older people, and those with underlying medical problems like high
                blood pressure, heart and lung problems, diabetes, or cancer
              </p>
            </div>
          </div>
        </div>
      </section>
      <Spreads />
        <Question />
        <Washed />
        <LandingMobile />
        <News />
        <Footer />
</>
  )
}

export default Symptom;