import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="navb">
        <div className="linksb">
          <NavLink className="linkb" to="/">
            HOME
          </NavLink>
          <NavLink className="linkb" to="/kicks">
            KICKS
          </NavLink>
          <NavLink className="linkb" to="/CreateKick">
            ADDKICK
          </NavLink>
          <NavLink className="linkb" to="/Brands">
            BRANDS
          </NavLink>
          {props.children}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
