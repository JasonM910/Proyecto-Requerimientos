import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import servicios from "../data/services";

function ServiceDetail() {
  const { id } = useParams();
  const servicio = servicios.find((item) => item.id === Number(id));

  if (!servicio) {
    return (
        <main className="py-5">
          <Container className="text-center py-5">
            <h1 className="fw-bold">Servicio no encontrado</h1>
            <p className="text-muted">El servicio que buscas no está disponible.</p>
            <Button as={Link} to="/servicios" className="btn-botanico px-4 py-2 mt-2">
              Volver a servicios
            </Button>
          </Container>
        </main>
    );
  }

  return (
      <main>
        <section className="encabezado-pagina py-5 border-bottom border-verde-salvia-light">
          <Container className="py-3">
            <Link to="/servicios" className="enlace-regreso d-inline-flex align-items-center gap-2 mb-3">
              ← Volver a servicios
            </Link>
            <div>
            <span className="seccion-etiqueta d-inline-block px-3 py-1 bg-white rounded-pill border border-verde-salvia-light">
              {servicio.tipoEvento}
            </span>
            </div>
            <h1 className="display-4 fw-bold mt-3 mb-3">{servicio.titulo}</h1>
            <p className="lead text-muted mb-0 texto-limitado fs-5">{servicio.descripcion}</p>
          </Container>
        </section>

        <section className="py-5">
          <Container className="py-3">
            <Row className="g-5">
              <Col lg={7}>
                <h2 className="h3 fw-bold mb-3">Acerca del servicio</h2>
                <p className="text-muted lh-lg mb-5 fs-6">{servicio.detalle}</p>

                <h2 className="h3 fw-bold mb-4">Características principales</h2>
                <div className="lista-caracteristicas d-flex flex-column gap-3">
                  {servicio.caracteristicas.map((caracteristica, idx) => (
                      <div className="caracteristica shadow-xs rounded-3 p-3 border border-verde-salvia-light" key={idx}>
                        <span className="icono-valor-box rounded-circle d-flex align-items-center justify-content-center me-3" aria-hidden="true">✓</span>
                        <p className="mb-0 fw-semibold">{caracteristica}</p>
                      </div>
                  ))}
                </div>
              </Col>

              <Col lg={5}>
                <aside className="panel-detalle p-4 p-md-5 rounded-4 shadow-sm border border-verde-salvia-light sticky-top" style={{ top: "100px" }}>
                  <h3 className="h4 fw-bold mb-4">Este servicio incluye</h3>
                  <ul className="lista-incluye list-unstyled d-flex flex-column gap-2 mb-4">
                    {servicio.incluye.map((elemento, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 text-muted">
                          <span className="text-verde-etiqueta fw-bold">•</span>
                          <span>{elemento}</span>
                        </li>
                    ))}
                  </ul>
                  <Button as={Link} to="/cotizacion" className="btn-botanico w-100 py-3 shadow-sm text-center fw-bold">
                    Solicitar cotización
                  </Button>
                </aside>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
  );
}

export default ServiceDetail;