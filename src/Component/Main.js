import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Card.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { GrDislike, GrLike } from "react-icons/gr";
import SearchInput from "./SearchInput";
const Main = () => {
  const [apiData, setAPIData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);

  const earthDateApi =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-6-3&api_key=TGC91gcCla8qhfS6CwvPpTKkKZBAM2ftcLqkdFVG";

  useEffect(() => {
    axios
      .get(earthDateApi)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const data = apiData.photos;

  console.log(data);
  const handleBtn = () => {
    setToggleBtn(!toggleBtn);
  };

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
          <SearchInput />
        </div>
      </div>

      <div className="card-wrapper">
        {data &&
          data.map((item, index) => (
            <div className="card-container" key={item.id}>
              <Link to={`/image/${item.id}`}>
                <img src={item.img_src} alt="card-pics" width={300} />
              </Link>
              <div className="card-details">
                <span className="camera-name">{item.camera.name}</span>
                <span className="earth-date">{item.earth_date}</span>
              </div>
              <div className="toggle-like">
                <button
                  className={toggleBtn ? "like-btn" : "dislike-btn"}
                  onClick={handleBtn}
                >
                  <span>{toggleBtn ? <GrDislike /> : <GrLike />}</span>
                </button>
              </div>
            </div>
          ))}
        {/* <div className="card-container">
          {data &&
            data.map((item) => (
              <>
                <Link to={`/image/${item.id}`} key={item.id}>
                  <img src={item.img_src} alt="card-pics" width={300} />
                </Link>
                <div className="card-details">
                  <span className="camera-name">{item.camera.name}</span>
                  <span className="earth-date">{item.earth_date}</span>
                </div>
              </>
            ))}
          <div className="toggle-like">
            <button
              className={toggleBtn ? "like-btn" : "dislike-btn"}
              onClick={handleBtn}
            >
              <span>{toggleBtn ? <GrDislike /> : <GrLike />}</span>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;
