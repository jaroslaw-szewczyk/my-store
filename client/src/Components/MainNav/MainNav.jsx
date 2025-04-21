import { Navbar, Nav } from 'react-bootstrap';

function MainNav() {
  return (
    <Navbar expand="lg" variant="light">
        <Navbar.Brand href="#">
          <img src="img/pixel_nav_logo.png" 
          className="d-inline-block align-top"
          alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">PlayStation</Nav.Link>
            <Nav.Link href="#about">Xbox</Nav.Link>
            <Nav.Link href="#contact">Nintendo</Nav.Link>
            <Nav.Link href="#contact">PC Gaming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav;