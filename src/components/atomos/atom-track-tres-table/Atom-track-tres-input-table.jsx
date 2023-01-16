import '../../moleculas/mol-track-tres-table/mol-track-tres-table.css';
import React from 'react';
import DataApi from '../../../services/Services-data-api-countries';
import { render } from '@testing-library/react';

function InputSearch(props) {
  return(
    <div className="search">
      <form >
        <label className="labelThree">Search:</label>
        <input type="text"/>
      </form>
    </div> 
  )
};

export default InputSearch; 

/*const Data = () => {
    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    
    const handleChange = (e) => {
        const value = e.target.value;
        const searchData = data.filter(data => data.country.toLowerCase().includes(value.toLowerCase()));
        setDisplayData(searchData);
    };*/

    /*  handleSubmit = event => {
    event.preventDefault();
    }

    handleCountry = event => {
    this.setState(event.target.value);
    };

    function filtrar(nextProps) {
        if (nextProps.searchValue !== this.props.searchValue){
            this.setState({
                filterData: this.props.paginatedData.filter(country => country.country(nextProps))
            });
        };
    };
*/