import React from 'react'
import '../landing-news/news.css';
import blog1 from '../../../../assets/img/img/icons/blog1.jpg';
import blog2 from '../../../../assets/img/img/icons/blog2.jpg';
import blog3 from '../../../../assets/img/img/icons/blog3.jpg';
import 'bootstrap/dist/css/bootstrap.css';

const News = () => {
  return (
    <>
    <h3 class="newspeq text-center text-primary fs-5">News</h3>
        <h2 class="newsxl text-center text-primary display-3 fw-bold">
          Latest News About Corona Virus
        </h2>
    <div class="d-flex justify-content-center">
        <div class="p-2">
          <img src={blog1} alt="blog1" width="300px" />
          <div class="p-2">
            <small class="text-muted"><i class="fa-sharp fa-solid fa-stopwatch"></i> 9 Sept 2020 <i class="fa-sharp fa-solid fa-comment"></i> 2 Comment</small>
          </div>
          <div class="p-2 text-primary">
            <h5 class="card-title"><p>What should I do if I have</p>COVID-19 symptoms</h5>
          </div>
          <div class="p-2">
            <a href="#" class="card-link">Continue</a>
          </div>
        </div>
        <div class="p-2">
          <img src={blog2} alt="blog2" width="300px" />
          <div class="p-2">
            <small class="text-muted"><i class="fa-sharp fa-solid fa-stopwatch"></i> 8 Sept 2020 <i class="fa-sharp fa-solid fa-comment"></i> 20 Comment</small>
          </div>
          <div class="p-2 text-primary">
            <h5 class="card-title "><p>What you need to know About</p>Coronavirus</h5>
          </div>
          <div class="p-2">
            <a href="#" class="card-link">Continue</a>
          </div>
        </div>
        <div class="p-2">
          <img src={blog3} alt="blog3" width="300px" />
          <div class="p-2">
            <small class="text-muted"><i class="fa-sharp fa-solid fa-stopwatch"></i> 7 Sept 2020 <i class="fa-sharp fa-solid fa-comment"></i> 2 Comment</small>
          </div>
          <div class="p-2 text-primary">
            <h5 class="card-title"><p>Seek immediate care if you</p>have difficulty breathing</h5>
          </div>
          <div class="p-2">
            <a href="#" class="card-link">Continue</a>
          </div>
        </div>
    </div>
</>
  )
}

export default News