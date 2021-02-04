import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import "../style/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/" className="nav__logo ">
            StriveJob
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav__RouterLink">
            <Link className=" mx-2 d-flex align-self-center" to="/">
              Home
            </Link>
            <Link className="mx-2 d-flex align-self-center" to="#">
              Jobs
            </Link>
            <Link className="mx-2 d-flex align-self-center" to="/favourites">
              Favourites
            </Link>
            <div className="d-flex mx-5 text-end ">
              {/* <p className="font-weight-bold mb-0">Recruiting? | </p>
              <Link
                to="#"
                className="dark-background light-text rounded-pill px-4 py-1 "
                style={{ fontSize: 16 }}
              >
                Post a job
              </Link> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
