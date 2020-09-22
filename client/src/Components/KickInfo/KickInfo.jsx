import React from "react";

import { Link } from "react-router-dom";

import MainButton from "../MainButton/MainButton";

import "./KickInfo.css";

const KickInfo = ({ name, image_url }) => {
  return (
    <>
      <div className="kick-info">
        <h2>Kick Info:</h2>
        <h3 className="kick-detail-left">Name: {name}</h3>
        <img src= {image_url}/>
        

        <Link to="/kicks">
          <MainButton buttonText={"DOPE KICKS!"} buttonColor={"orange"} />
        </Link>
      </div>
    </>
  );
};

export default KickInfo;
