import React from 'react';
import '../symptom/symptom.css';
import bannerright from '../../../assets/img/bannerright.png';
import cough from '../../../assets/img/cough.png';
import sore from '../../../assets/img/sore.png';

const symptom = () => {
  return (
    <>
      <section class="symptom mt-5 mb-5 container">
        <h3 class="symptonpeq text-center fs-5">Symptom</h3>
        <h2 class="symptonxl text-center display-3 fw-bold">
          Basic Symptom Against Corona virus
        </h2>
        <div class="symptom-cards-content mt-5 row">
          <div class="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div class="symptoncard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={bannerright} alt="banner-img" width="180px"/>
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Anches and pains
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Fever is a key symptom, experts say. Don't fixate on a number, but
                khow it's really not a fever until your temperature reaches at
                least 100
              </p>
            </div>
          </div>
          <div class="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div class="symptoncard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={cough} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Runny nose
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                People of all ages who experience fever and/or cough associated
                withdifficulty breathing/shortness of breath
              </p>
            </div>
          </div>
          <div class="card-symptom col-md-6 col-lg-4 p-3 h-100">
            <div class="symptoncard card p-3 shadow border-0">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <img src={sore} alt="banner-img" />
              </div>
  
              <h3 class="fw-bold mb-3 text-center text-blue-primary">
                Sore throat
              </h3>
              <p class="mb-3 text-center text-blue-secondary">
                Older people, and those with underlying medical problems like high
                blood pressure, heart and lung problems, diabetes, or cancer
              </p>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default symptom