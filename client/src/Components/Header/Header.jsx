import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <h1>Top Kicks</h1>
      <Nav>
      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <p onClick={props.handleLogout}>logout</p>
        </>
      ) : (
        <>
          <NavLink className="linkb" to="/Login">
            Login
          </NavLink>
          <NavLink className="linkb" to="/Register">
            Register
          </NavLink>
        </>
      )}
      </Nav>
    </header>
  );
}
