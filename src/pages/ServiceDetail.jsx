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
          <h1>Servicio no encontrado</h1>
          <p className="text-muted">El servicio que buscas no está disponible.</p>
          <Button as={Link} to="/servicios" className="btn-botanico">
            Volver a servicios
          </Button>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <section className="encabezado-pagina py-5">
        <Container className="py-3">
          <Link to="/servicios" className="enlace-regreso">← Todos los servicios</Link>
          <span className="seccion-etiqueta d-block mt-4">{servicio.tipoEvento}</span>
          <h1 className="display-5 fw-bold mt-2 mb-3">{servicio.titulo}</h1>
          <p className="lead text-muted mb-0 texto-limitado">{servicio.descripcion}</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={7}>
              <h2 className="h3 mb-3">Acerca del servicio</h2>
              <p className="text-muted mb-5">{servicio.detalle}</p>

              <h2 className="h3 mb-4">Características principales</h2>
              <div className="lista-caracteristicas">
                {servicio.caracteristicas.map((caracteristica) => (
                  <div className="caracteristica" key={caracteristica}>
                    <span aria-hidden="true">✓</span>
                    <p className="mb-0">{caracteristica}</p>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={5}>
              <aside className="panel-detalle p-4 p-md-5 rounded-4">
                <h2 className="h4 mb-4">Este servicio incluye</h2>
                <ul className="lista-incluye">
                  {servicio.incluye.map((elemento) => (
                    <li key={elemento}>{elemento}</li>
                  ))}
                </ul>
                <Button as={Link} to="/cotizacion" className="btn-botanico w-100 mt-3">
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
