import React from "react";

import { Link } from "react-router-dom";

import MainButton from "../MainButton/MainButton";
import Nav from "../Shared/Nav/Nav";

import "./KickInfo.css";

const KickInfo = ({ name, brand, color, year, price }) => {
  return (
    <Nav>
      <div className="kick-info">
        <h2>Kick Info:</h2>
        <h3 className="kick-detail-left">Name: {name}</h3>
        <h3 className="kick-detail-left">Brand: {brand}</h3>
        <h3 className="kick-detail-left">Color: {color}</h3>
        <h3 className="kick-detail-left">Year: {year}</h3>
        <h3 className="kick-detail-left">Price: {price}</h3>

        <Link to="/kick">
          <MainButton buttonText={"DOPE KICKS!"} buttonColor={"orange"} />
        </Link>
      </div>
    </Nav>
  );
};

export default KickInfo;
