import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SearchInput.css";
import Query from "../Pages/Query";
// eslint-disable-next-line react-hooks/rules-of-hooks
const SearchInput = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState("");
  console.log(camera);
  const filterApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=TGC91gcCla8qhfS6CwvPpTKkKZBAM2ftcLqkdFVG&earth_date=${date}&camera=${camera}`;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(filterApi)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(data)
  
  return (
    <div className="search-wrap">
      <form action="/" method="get">
        <input
          id="date"
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
        <select
          id="camera"
          onChange={(e) => {
            setCamera(e.target.value);
          }}
        >
          <option value="fhaz">FHAZ</option>
          <option value="rhaz">RHAZ</option>
          <option value="mast">MAST</option>
          <option value="chemcam">CHEMCAM</option>
          <option value="mahli">MAHLI</option>
          <option value="mardi">MARDI</option>
          <option value="navcam">NAVCAM</option>
          <option value="pancam">PANCAM</option>
          <option value="minites">MINITES</option>
        </select>

        <button type="submit" className="searchButton" onClick={handleSubmit}>
          search
        </button>
      </form>
      {/* <Query Data={data}/>  */}
    </div>
  );
};

export default SearchInput;
