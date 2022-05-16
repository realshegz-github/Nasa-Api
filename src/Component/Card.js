import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrDislike, GrLike } from "react-icons/gr";
const Card = ({ item }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const handleBtn = () => {
    setToggleBtn(!toggleBtn);
  };
  return (
    <div className="card-container" key={item.id}>
      <Link to={`/image/${item.id}`}>
        <img src={item.img_src} alt="card-pics" width={300} height={200} />
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
  );
};

export default Card;
