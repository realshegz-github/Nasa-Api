import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Card.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

import SearchInput from "./SearchInput";
import Card from "./Card";
const Main = () => {
  const [apiData, setApiData] = useState([]);

  const earthDateApi =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-6-3&api_key=TGC91gcCla8qhfS6CwvPpTKkKZBAM2ftcLqkdFVG";

  useEffect(() => {
    axios
      .get(earthDateApi)
      .then((response) => {
        setApiData(response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            alt="logo"
            width={70}
          />
          <Link to="/">NASA~API</Link>
        </div>
        <div className="searchbar">
          <SearchInput setData={setApiData} />
        </div>
      </div>

      <div className="card-wrapper">
        {apiData.length === 0 ? (
          <h1>No photos available</h1>
        ) : (
          apiData.map((item) => <Card item={item} />)
        )}
      </div>
    </>
  );
};

export default Main;
