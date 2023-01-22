import DataApi from "../../../services/Services-data-api-countries";
import "../mol-track-tres-table/mol-track-tres-table.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import IconsArrow from "../../../assets/fonts/icons/order.png";
import { useState } from "react";
import Pagination from "react-paginate";
import Layout from "../../render/trackers/tracker-layout/Layout";
import TrackerDiecinueve from "../../render/trackers/tracker-covid19/Tracker-covid-diecinueve";

function TableTracker() {

  const data = DataApi();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startingIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startingIndex, startingIndex + rowsPerPage)

  return (
    <div className="containerTable">
      <>
        <Layout />
        <TrackerDiecinueve />
      </>
      <div className="tableContainer">
        <div className="titleTable">
          <p>Ajax Data Table - Covid-19 Country Wise State</p>
        </div>
        
        <form className="form">
          <div className="option">
            <label className="labelOne">Show</label>
            <select onChange={handleRowsPerPageChange}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <label className="labelTwo">entries</label>
          </div>
          <div className="search">
            <label className="labelThree">Search:</label>
            <input 
              type="text" 
              onChange={handleSearch}
            />
          </div>
        </form>

        <Table striped hover className="infoTable" size="xg">
          <thead>
            <tr>
              <th>
                Flag <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Country
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Cases
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                New Cases
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Deaths
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                New Deaths
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Recoverd
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Active
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Critical
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
              <th>
                Tested
                <img src={IconsArrow} className="iconsArrow" alt="IconsArrow" />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((country) => (
              <tr key={country.country}>
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
          pageCount={Math.ceil(currentData.length / totalPages)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};


export default TableTracker;