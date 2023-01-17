import DataApi from '../../../services/Services-data-api-countries';
import '../mol-track-tres-table/mol-track-tres-table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import order from '../../../assets/fonts/icons/order.png';
import React, {useState } from 'react';
import InputSearch from "../../atomos/atom-track-tres-table/Atom-track-tres-input-table";
import SelecOption from "../../atomos/atom-track-tres-table/Atom-track-tres-option-table";
import { Pagination, Table } from 'react-bootstrap';


const TableTracker = ({data}) => {  

    if (data.length === 0){
        data= DataApi();
       }
        console.log(data);
        //const [displayReports, setDisplayReports] = useState([]);
        const [currentPage, setCurrentPage] = useState(0);
        const [pageSize, setPageSize] = useState(10);
        const handlePageChange = ({ selected }) => {
            setCurrentPage(selected);
        };
        const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
      
    return (
        <div className="tableContainer">
            <div className='titleTable'>
                <p>Ajax Data Table - Covid-19 Country Wise State</p>
            </div>
            <div className="options">
                <SelecOption/>
                <InputSearch/>                
            </div>
            <Table striped hover className='infoTable'>
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
                pageCount={Math.ceil(data.length / pageSize)}
                onPageChange={handlePageChange}
            />            
        </div>
    );
};

export default TableTracker;