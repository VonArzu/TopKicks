import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <h1>Top Kicks</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={props.handleLogout}>logout</button>
        </div>
      ) : (
        <Nav>
          <Link to="/login">Login/Register</Link>
        </Nav>
      )}
      <hr />
      {currentUser && (
        <>
          <Link to="/kicks">Kicks</Link>
          <Link to="/brands">Brands</Link>
        </>
      )}
    </header>
  );
}
