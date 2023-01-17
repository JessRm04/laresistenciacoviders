import React from 'react'
import '../landing-view-questions/landing-view-questions.css'

function Question() {
  return (
    <div className='contenedorQuestions'>
        <div className='title'>
            <h5 className='titleQuestionsFaqs'>Faqs</h5>
            <h1 className='titleQuestions'>Frequently Asked Questions</h1>
        </div>
        <div className='questionCards'>
            <div className='questionCardsLeft'>
                <div className='question2 questionOrder01'>
                    <h4>01. How does COVID-19 spread?</h4>
                    <p>Data has shown that it spreads from person to person among those in close contact 
                    (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets
                    released when someone infected with the virus.
                    </p>
                </div>
                <div className='question questionOrder02'>
                    <h4>2. What are the symptoms of COVID-19?</h4>
                </div>
                <div className='question questionOrder03'>
                    <h4>3. Should I wear mask?</h4>
                </div>
            </div>
            <div className='questionCardsRight'>
                <div className='question questionOrder04'>
                    <h4>04. What does it mean to self-isolate?</h4>
                </div>
                <div className='question questionOrder05'>
                    <h4>05. Can children or adolescents catch COVID-19?</h4>
                </div>
                <div className='question2 questionOrder06'>
                    <h4>06. Is there a vaccine or drug for COVID-19?</h4>
                    <p>While some western, traditional or home remedies may provide comfort and alleviate symptoms
                    of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. 
                    WHO does not recommend self-medication with any medicines.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Question;