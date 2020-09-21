import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navb">
        <div className="linksb">
          <NavLink className="linkb" to="/">
            HOME
          </NavLink>
          <NavLink className="linkb" to="/AllKicks">
            KICKS
          </NavLink>
          <NavLink className="linkb" to="/CreateKick">
            ADDKICK
          </NavLink>
          <NavLink className="linkb" to="/Brands">
            BRANDS
          </NavLink>
          <NavLink className="linkb" to="/Login">
            Login
          </NavLink>
          <NavLink className="linkb" to="/Register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
