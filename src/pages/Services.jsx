import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/services";

function Services() {
  return (
    <main>
      <section className="encabezado-pagina py-5">
        <Container className="text-center py-3">
          <span className="seccion-etiqueta">Servicios para eventos</span>
          <h1 className="display-5 fw-bold mt-2">Una propuesta para cada ocasión</h1>
          <p className="lead text-muted mx-auto mb-0 texto-limitado">
            Conoce los tipos de eventos que atendemos y encuentra el servicio que mejor se adapta a tu celebración.
          </p>
        </Container>
      </section>

      <section className="py-5" aria-labelledby="tipos-eventos-titulo">
        <Container>
          <h2 id="tipos-eventos-titulo" className="text-center mb-2">Tipos de eventos</h2>
          <p className="text-muted text-center mb-5">
            Selecciona un servicio para consultar sus características principales.
          </p>

          <Row className="g-4">
            {servicios.map((servicio) => (
              <Col key={servicio.id} md={6} lg={4}>
                <ServiceCard
                  id={servicio.id}
                  titulo={servicio.titulo}
                  descripcion={servicio.descripcion}
                  tipoEvento={servicio.tipoEvento}
                  caracteristicas={servicio.caracteristicas.slice(0, 2)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Services;
