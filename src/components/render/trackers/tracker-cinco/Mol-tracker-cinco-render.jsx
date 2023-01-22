
<div
  className="chat-content active"
  id="country-wise"
  tabindex="5"
  style="overflow: hidden; outline: none;"
>
  <h1 className="stat-head">Covid-19 Country Wise - Tabs</h1>
  <div className="corona-update-in-tab">
    <ul className="nav nav-tabs items-flag">
      <li className="nav-item">
        <a data-toggle="tab" href="#USA" className="active">
          <img
            alt=""
            src="https://disease.sh/assets/img/flags/us.png"
            width="30"
          />
          USA
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div id="USA" data-country-code="US" className="tab-pane active">
        <div className="covid-world-widget">
          <div className="updated-time row">
            <div className="col-md-4 col-lg-3 col-6">
              <div className="covid-widget-1 defult-bx">
                <div className="icon">
                  <img src="images/icons/covid-defult.svg" alt="" />
                </div>
                <div className="info">
                  <h5>Total Cases</h5>
                  <h3>86503057</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
