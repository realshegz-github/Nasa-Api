import React, { useState } from "react";
import "../styles/Card.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { GrDislike, GrLike } from "react-icons/gr";
import SearchInput from "../Component/SearchInput";

const Query = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState();
  const handleBtn = () => {
    setToggleBtn(!toggleBtn);
  };

  console.log(data);
  return (
    <div>
      <SearchInput />
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
      </div>
    </div>
  );
};

export default Query;
