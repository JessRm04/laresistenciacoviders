import DataApi from '../../../services/Services-data-api-countries';
import '../mol-track-tres-table/mol-track-tres-table.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import order from '../../../assets/fonts/icons/order.png';
import Pagination from 'react-paginate';
import React, {useState } from 'react';
import InputSearch from "../../atomos/atom-track-tres-table/Atom-track-tres-input-table";
import SelecOption from "../../atomos/atom-track-tres-table/Atom-track-tres-option-table";


const TableTracker = () => {  
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(10);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedData = DataApi().slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    return (
        <div className="tableContainer">
            <div>
                <p>Ajax Data Table - Covid-19 Country Wise State</p>
            </div>
            <div className="options">
                <SelecOption/>
                <InputSearch/>                
            </div>
            <Table striped hover table-primary>
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
                pageCount={Math.ceil(DataApi().length / pageSize)}
                onPageChange={handlePageChange}
            />            
        </div>
    );
};

export default TableTracker;
  
/*--------------------------------------------------------

function searchingTerm(term){
    return function(x){
        return x.country.toLowerCase(term) || !term;
    };
};


const TableTracker = () => {  
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(10);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedData = DataApi().slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    
    useEffect(() =>{
        setData(paginatedData);
    },[paginatedData])

    return (
        <div className="tableContainer">
            <div>
                <p>Ajax Data Table - Covid-19 Country Wise State</p>
            </div>
            <div className="options">
                <SelecOption/>
                {data && (
                    <InputSearch name="term" onChange={e => setTerm(e.target.value)} />
                )}                
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
                    {data.filter(searchingTerm(term)).map(country => (
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
                pageCount={Math.ceil(DataApi().length / pageSize)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default TableTracker;*/