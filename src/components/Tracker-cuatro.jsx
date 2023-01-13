import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Tracker-cuatro.css';

const TrackerCuatro = () => {
  return (
    <div>
      <div className="row" id="TopCountryStats">
					<div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
						<h4>Top Cases</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/us.png" alt="name" width="30"/>
                        <span> USA</span>
                        <span> 86503057</span>
                        </div>
                        <div className="item"><img src="https://disease.sh/assets/img/flags/in.png" alt="name" width="30"/><span> India</span><span> 43178080</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/br.png" alt="name" width="30"/><span> Brazil</span><span> 31153069</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/fr.png" alt="name" width="30"/><span> France</span><span> 29621064</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/de.png" alt="name" width="30"/><span> Germany</span><span> 26539842</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/gb.png" alt="name" width="30"/><span> UK</span><span> 22305893</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ru.png" alt="name" width="30"/><span> Russia</span><span> 18348065</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/kr.png" alt="name" width="30"/><span> S. Korea</span><span> 18163686</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/it.png" alt="name" width="30"/><span> Italy</span><span> 17490451</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/tr.png" alt="name" width="30"/><span> Turkey</span><span> 15072747</span></div></div>
					<div className="col-md-4 col-lg-2 col-6" id="CountryTodayCases">
						<h4> Today Cases</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/kp.png" alt="name" width="30"/>
                        <span> N. Korea</span>
                        <span> 73790</span>
                        </div>
                        <div className="item"><img src="https://disease.sh/assets/img/flags/jp.png" alt="name" width="30"/><span> Japan</span><span> 16627</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/au.png" alt="name" width="30"/><span> Australia</span><span> 12742</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/kr.png" alt="name" width="30"/><span> S. Korea</span><span> 9835</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/nz.png" alt="name" width="30"/><span> New Zealand</span><span> 4473</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/th.png" alt="name" width="30"/><span> Thailand</span><span> 3236</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/cn.png" alt="name" width="30"/><span> China</span><span> 56</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/pk.png" alt="name" width="30"/><span> Pakistan</span><span> 55</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/mk.png" alt="name" width="30"/><span> Macedonia</span><span> 0</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ps.png" alt="name" width="30"/><span> Palestine</span><span> 0</span></div></div>
					<div className="col-md-4 col-lg-2 col-6" id="CountryTopDeaths">
						<h4> Today Deaths</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/us.png" alt="name" width="30"/>
                        <span> USA</span>
                        <span> 1033571</span>
                        </div>
                        <div className="item"><img src="https://disease.sh/assets/img/flags/br.png" alt="name" width="30"/><span> Brazil</span><span> 667044</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/in.png" alt="name" width="30"/><span> India</span><span> 524651</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ru.png" alt="name" width="30"/><span> Russia</span><span> 379445</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/mx.png" alt="name" width="30"/><span> Mexico</span><span> 324966</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/pe.png" alt="name" width="30"/><span> Peru</span><span> 213248</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/gb.png" alt="name" width="30"/><span> UK</span><span> 178749</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/it.png" alt="name" width="30"/><span> Italy</span><span> 166922</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/id.png" alt="name" width="30"/><span> Indonesia</span><span> 156610</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/fr.png" alt="name" width="30"/><span> France</span><span> 148464</span></div></div>
					<div className="col-md-4 col-lg-2 col-6" id="CountryTodayDeaths">
						<h4> Today Deaths</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/th.png" alt="name" width="30"/>
                        <span> Thailand</span>
                        <span> 28</span>
                        </div>
                        <div className="item">
                            <img src="https://disease.sh/assets/img/flags/jp.png" alt="name" width="30"/>
                            <span> Japan</span>
                            <span> 23</span>
                            </div>
                            <div className="item"><img src="https://disease.sh/assets/img/flags/au.png" alt="name" width="30"/><span> Australia</span><span> 22</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/kr.png" alt="name" width="30"/><span> S. Korea</span><span> 20</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/nz.png" alt="name" width="30"/><span> New Zealand</span><span> 7</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/pw.png" alt="name" width="30"/><span> Palau</span><span> 0</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/nl.png" alt="name" width="30"/><span> Netherlands</span><span> 0</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/nc.png" alt="name" width="30"/><span> New Caledonia</span><span> 0</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ni.png" alt="name" width="30"/><span> Nicaragua</span><span> 0</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ne.png" alt="name" width="30"/><span> Niger</span><span> 0</span></div></div>
					<div className="col-md-4 col-lg-2 col-6" id="CountryTopActive">
						<h4> Top Active</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/ua.png" alt="name" width="30"/>
                        <span> Ukraine</span>
                        <span> 4902895</span>
                        </div>
                        <div className="item">
                            <img src="https://disease.sh/assets/img/flags/pt.png" alt="name" width="30"/>
                            <span> Portugal</span>
                            <span> 4044091</span>
                            </div>
                            <div className="item"><img src="https://disease.sh/assets/img/flags/pe.png" alt="name" width="30"/><span> Peru</span><span> 3371008</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/us.png" alt="name" width="30"/><span> USA</span><span> 2941697</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ro.png" alt="name" width="30"/><span> Romania</span><span> 2844701</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/tw.png" alt="name" width="30"/><span> Taiwan</span><span> 1642726</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/no.png" alt="name" width="30"/><span> Norway</span><span> 1431578</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/hk.png" alt="name" width="30"/><span> Hong Kong</span><span> 1205256</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/vn.png" alt="name" width="30"/><span> Vietnam</span><span> 1185067</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/fi.png" alt="name" width="30"/><span> Finland</span><span> 1100584</span></div></div>
					<div className="col-md-4 col-lg-2 col-6" id="CountryTopRecover">
						<h4> Top Recover</h4>
					<div className="item">
                        <img src="https://disease.sh/assets/img/flags/us.png" alt="name" width="30"/>
                        <span> USA</span>
                        <span> 82527789</span>
                        </div>
                        <div className="item"><img src="https://disease.sh/assets/img/flags/in.png" alt="name" width="30"/><span> India</span><span> 42622757</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/br.png" alt="name" width="30"/><span> Brazil</span><span> 30063682</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/fr.png" alt="name" width="30"/><span> France</span><span> 29035182</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/de.png" alt="name" width="30"/><span> Germany</span><span> 25540200</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/gb.png" alt="name" width="30"/><span> UK</span><span> 21970696</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/kr.png" alt="name" width="30"/><span> S. Korea</span><span> 17837506</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/ru.png" alt="name" width="30"/><span> Russia</span><span> 17760326</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/it.png" alt="name" width="30"/><span> Italy</span><span> 16681659</span></div><div className="item"><img src="https://disease.sh/assets/img/flags/tr.png" alt="name" width="30"/><span> Turkey</span><span> 14971256</span></div></div>
				</div>
    </div>
  );
};

export default TrackerCuatro;
