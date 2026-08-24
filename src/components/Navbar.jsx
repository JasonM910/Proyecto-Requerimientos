import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: 'var(--verde-bosque)' }} variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
          Catering Services
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>

            <Nav.Link as={Link} to="/servicios">
              Servicios
            </Nav.Link>

            <Nav.Link as={Link} to="/cotizacion">
              Cotización
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;