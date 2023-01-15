import Disease from "../../../services/disease";
import '../table/tableTracker.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import order from '../../../assets/fonts/icons/order.png';
import Pagination from 'react-paginate';
import React, { useState } from 'react';
import InputSearch from "./InputSearch";
import SelecOption from "./SelecOption";

const TableTracker = () => {  
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedData = Disease().slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    return (
        <div className="tableContainer">
            <div>
                <p>Ajax Data Table - Covid-19 Country Wise State</p>
            </div>
            <div className="options">
                <SelecOption/>
                <InputSearch/>
            </div>
            <Table striped hover size="sm" >
                <thead>
                    <tr>
                    <th>Flag <img src={order} className="order" alt="order"/></th>
                    <th>Country<img src={order} className="order" alt="order"/></th>
                    <th>Cases<img src={order} className="order" alt="order"/></th>
                    <th>New Cases<img src={order} className="order" alt="order"/></th>
                    <th>Deaths<img src={order} className="order" alt="order"/></th>
                    <th>New Deaths<img src={order} className="order" alt="order"/></th>
                    <th>Recoverd<img src={order} className="order" alt="order"/></th>
                    <th>Active<img src={order} className="order" alt="order"/></th>
                    <th>Critical<img src={order} className="order" alt="order"/></th>
                    <th>Tested<img src={order} className="order" alt="order"/></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map(country => (
                    <tr key={country.country}>
                        <td><img src={country.countryInfo.flag} alt="flag" className='flagImg'></img></td>
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
            <Pagination className="pagination"
                pageCount={Math.ceil(Disease().length / pageSize)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default TableTracker;
  