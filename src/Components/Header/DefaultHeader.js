import React from "react";
import logo from "../../Images/TRKR.svg";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "@emotion/styled";


const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    padding: 0 0.5rem;
  }
`;

function DefaultHeader({ handleShow }) {
  return (
    <StyledHeader>
      <img src={logo} className="headerLogo"></img>

      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            {/* <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link> */}
            <Button onClick={handleShow} className="headerButton">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
}

export default DefaultHeader;
