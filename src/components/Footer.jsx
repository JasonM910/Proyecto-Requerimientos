import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container className="text-center">

        <h5>Catering Services</h5>

        <p className="mb-1">
          Servicio de catering para todo tipo de eventos.
        </p>

        <p className="mb-0">
          © 2026 Catering Services
        </p>

      </Container>
    </footer>
  );
}

export default Footer;