import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-botanico py-4">
      <Container>
        <div className="footer-contenido">
          <div>
            <h5>Catering Services</h5>
            <p className="mb-0">
              Servicio de catering para todo tipo de eventos.
            </p>
          </div>

          <address className="footer-contactos mb-0" aria-label="Información de contacto">
            <a href="mailto:info@cateringservices.com">
              info@cateringservices.com
            </a>
            <a href="tel:+50687839143">+506 8783-9143</a>
            <span>Ciudad Quesada, San Carlos</span>
            <span>Lunes a sábado, 8:00 a. m. – 6:00 p. m.</span>
          </address>
        </div>

        <div className="footer-copyright mt-4 pt-3 text-center">
          © 2026 Catering Services
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
