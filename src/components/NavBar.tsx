import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">
          Baraka Kautsar Sofiuddin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Let's Connect!" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/barakakautsar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linked.In
              </NavDropdown.Item>
              <NavDropdown.Item
                href="mailto:barakakautsar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/barakakautsar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
