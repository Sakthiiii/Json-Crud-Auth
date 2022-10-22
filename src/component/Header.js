import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" align='center'>
          <Container >
            <Navbar.Brand href="">WelCome to the Crud</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="/" >Register</Nav.Link> */}
             
            
            </Nav>
            
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
