import DataApi from "../../../services/Services-data-api-countries";
import "../mol-track-tres-table/mol-track-tres-table.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import order from "../../../assets/fonts/icons/order.png";
import { useState } from "react";
import SelecOption from "../../atomos/atom-track-tres-table/Atom-track-tres-option-table";
import InputSearch from "../../atomos/atom-track-tres-table/Atom-track-tres-input-table";
import Pagination from "react-paginate";

function TableTracker(props) {

  const data = DataApi();

  const [displayReport, setDisplayReport] = useState({ready:false});
  const [country, setCountry] = useState (props.defaultCountry);


  function handleSubmit(event) {
    event.preventDefault();
    DataApi();
  }

  function handleChange(event) {
    setCountry(event.target.value);
  }
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  if (displayReport.ready){
    return (
      <div className="tableContainer">
        <div className="titleTable">
          <p>Ajax Data Table - Covid-19 Country Wise State</p>
        </div>
        <div className="options">
          <SelecOption />
          <div className="search">
            <form onSubmit={handleSubmit}>
              <label className="labelThree">Search:</label>
              <input type="searcg" onChange={handleChange}/>
            </form>
          </div>
        </div>
        <Table striped hover className="infoTable">
          <thead>
            <tr>
              <th>
                Flag <img src={order} className="order" alt="order" />
              </th>
              <th>
                Country
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Cases
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                New Cases
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Deaths
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                New Deaths
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Recoverd
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Active
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Critical
                <img src={order} className="order" alt="order" />
              </th>
              <th>
                Tested
                <img src={order} className="order" alt="order" />
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((country) => (
              <tr id={country.country}>
                <td>
                  <img
                    src={country.countryInfo.flag}
                    alt="flag"
                    className="flagImg"
                  ></img>
                </td>
                <td>{country.country}</td>
                <td>{country.cases}</td>
                <td>{country.todayCases}</td>
                <td>{country.deaths}</td>
                <td>{country.todayDeaths}</td>
                <td>{country.recovered}</td>
                <td>{country.active}</td>
                <td>{country.critical}</td>
                <td>{country.tests}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination
          className="pagination"
          pageCount={Math.ceil(data.length / pageSize)}
          onPageChange={handlePageChange}
        />
      </div>
    );
  } else {
    DataApi();
    return "Loding contry ..."
  }
}


export default TableTracker;