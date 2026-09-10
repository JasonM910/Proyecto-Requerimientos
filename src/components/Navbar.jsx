import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
  return (
      <Navbar className="navbar-botanica shadow-sm py-3" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <span className="icono" aria-hidden="true">
              <i className="bi bi-bluesky fs-4 text-white"></i>
            </span>
            <span className="fw-bold tracking-tight fs-4">Catering Services</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-main" />

          <Navbar.Collapse id="navbar-main">
            <Nav className="ms-auto gap-lg-3 mt-3 mt-lg-0">
              <Nav.Link as={NavLink} to="/" end className="fw-semibold px-3">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/servicios" className="fw-semibold px-3">
                Servicios
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cotizacion" className="btn btn-botanico-outline text-white border-white-50 ms-lg-2 px-4 py-2">
                Cotización
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;