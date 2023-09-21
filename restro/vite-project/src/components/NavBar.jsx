import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = ({getApiData}) => {

const [searchText, setSearch]= useState("") ;

const handleSearch=()=>{
 

getApiData(searchText) ;

}



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Restra</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <span class="material-symbols-outlined">home</span>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/create"
              >
                <span class="material-symbols-outlined">draw</span>
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/details"
              >
                Details
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/search"
              >
                Search
              </Link>{" "}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>{setSearch(event.target.value)}}

            />
            <Button variant="outline-success"   onClick={handleSearch} >
              <span class="material-symbols-outlined">search</span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
