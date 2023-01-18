import "../../moleculas/mol-track-tres-table/mol-track-tres-table.css";

function InputSearch() {

 
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label className="labelThree">Search:</label>
        <input type="searcg" onChange={handleChange}/>
      </form>
    </div>
  );
}

export default InputSearch;

