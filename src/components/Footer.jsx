import { Container } from "react-bootstrap";


function Footer() {
  return (
      <footer className="footer-botanico py-5 mt-auto border-top border-verde-salvia-light">
        <Container>
          <div className="footer-contenido">
            <div>
              <span className="icono" aria-hidden="true">
                <i class="bi bi-bluesky"></i>
              </span>
              <span className="fw-bold tracking-tight fs-4"> Catering Services</span>
              <p className="mb-0 text-white-50 small">
                Servicio de catering para todo tipo de eventos sociales y corporativos en San Carlos y zonas aledañas.
              </p>
            </div>

            <address className="footer-contactos mb-0 small" aria-label="Información de contacto">
              <div>
                <span className="fw-semibold text-verde-menta d-block">Correo:</span>
                <a href="mailto:info@cateringservices.com">info@cateringservices.com</a>
              </div>
              <div>
                <span className="fw-semibold text-verde-menta d-block">Teléfono:</span>
                <a href="tel:+50687839143">+506 8783-9143</a>
              </div>
              <div>
                <span className="fw-semibold text-verde-menta d-block">Ubicación:</span>
                <span>Ciudad Quesada, San Carlos</span>
              </div>
              <div>
                <span className="fw-semibold text-verde-menta d-block">Horario:</span>
                <span>Lun a Sáb: 8:00 a.m. – 6:00 p.m.</span>
              </div>
            </address>
          </div>

          <div className="footer-copyright mt-4 pt-4 text-center">
            <p className="mb-0 small">© 2026 Catering Services. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
  );
}

export default Footer;