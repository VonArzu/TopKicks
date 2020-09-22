import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";
import Nike from "./Nike.png"
import "./Header.css"

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <h1>Top Kicks</h1>
      <img  src={Nike}
       class="header-Img" alt="sneakers"/>
      <Nav>
      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <p onClick={props.handleLogout}>logout</p>
        </>
      ) : (
        <>
          <NavLink className="linkb" to="/Login">
            LOGIN
          </NavLink>
          <NavLink className="linkb" to="/Register">
            REGISTER
          </NavLink>
        </>
      )}
      </Nav>
    </header>
  );
}
