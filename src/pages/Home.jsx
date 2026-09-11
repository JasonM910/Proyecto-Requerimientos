import { Accordion, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/services";

function Home() {
  return (
      <>
        <section className="hero-inicio py-5 position-relative overflow-hidden">
          <Container className="text-center py-5 position-relative z-1">
            <div className="d-inline-block mb-3 px-3 py-1 rounded-pill bg-white shadow-xs border border-verde-salvia-light">
              <span className="hero-etiqueta fw-bold"> Cocina · Celebración · Experiencia</span>
            </div>

            <h1 className="display-3 fw-bold tracking-tight mb-3">
              Catering Services
            </h1>

            <p className="lead mx-auto text-muted texto-limitado fs-5 mb-4">
              Sabor que reúne. Creamos experiencias gastronómicas memorables para tus eventos sociales y corporativos.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                  as={Link}
                  to="/servicios"
                  size="lg"
                  className="btn-botanico shadow-sm px-4 py-2"
              >
                Explorar servicios
              </Button>
              <Button
                  as={Link}
                  to="/cotizacion"
                  size="lg"
                  className="btn-botanico-outline px-4 py-2"
              >
                Solicitar cotización
              </Button>
            </div>
          </Container>
        </section>

        {/* Quiénes Somos / Propuesta de Valor */}
        <section className="py-5 my-3" aria-labelledby="sobre-nosotros-titulo">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={7}>
                <span className="seccion-etiqueta">Quiénes somos</span>
                <h2 id="sobre-nosotros-titulo" className="display-6 fw-bold mt-2 mb-3">
                  Convertimos cada evento en un momento para recordar
                </h2>
                <p className="text-muted mb-3 fs-6 lh-lg">
                  Somos un equipo dedicado a planificar y servir propuestas gastronómicas a la medida.
                  Adaptamos cada detalle al tipo de celebración, número de invitados y preferencias de tu menú.
                </p>
                <p className="text-muted mb-4 fs-6 lh-lg">
                  Desde la preparación con ingredientes frescos hasta el montaje final, aseguramos una experiencia fluida y confiable.
                </p>
              </Col>

              <Col lg={5}>
                <div className="panel-valores p-4 p-md-5 rounded-4 shadow-lg position-relative">
                  <h3 className="h4 fw-bold mb-4 text-white">Lo que nos distingue</h3>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <div className="icono-valor-box rounded-circle d-flex align-items-center justify-content-center">
                        ✓
                      </div>
                      <div>
                        <h5 className="h6 fw-bold mb-1 text-verde-menta">Menús Personalizados</h5>
                        <p className="small text-white-50 mb-0">Adaptados exactamente al gusto de tus invitados y al concepto del evento.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="icono-valor-box rounded-circle d-flex align-items-center justify-content-center">
                        ✓
                      </div>
                      <div>
                        <h5 className="h6 fw-bold mb-1 text-verde-menta">Calidad Garantizada</h5>
                        <p className="small text-white-50 mb-0">Ingredientes de alta frescura preparados por profesionales apasionados.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div className="icono-valor-box rounded-circle d-flex align-items-center justify-content-center">
                        ✓
                      </div>
                      <div>
                        <h5 className="h6 fw-bold mb-1 text-verde-menta">Atención Integral</h5>
                        <p className="small text-white-50 mb-0">Nos encargamos del montaje y la logística para que disfrutes sin preocupaciones.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Servicios Destacados */}
        <section className="seccion-menus py-5">
          <Container>
            <div className="text-center mb-5">
              <span className="seccion-etiqueta">Nuestras Propuestas</span>
              <h2 className="display-6 fw-bold mt-2">Nuestros Servicios</h2>
            </div>

            <Row className="g-4">
              {servicios.map((servicio) => (
                  <Col key={servicio.id} md={6} lg={4}>
                    <ServiceCard
                        id={servicio.id}
                        titulo={servicio.titulo}
                        descripcion={servicio.descripcion}
                        tipoEvento={servicio.tipoEvento}
                        caracteristicas={servicio.caracteristicas}
                        imagen={servicio.imagen}
                    />
                  </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Información importante */}
        <section className="seccion-informacion py-5" aria-labelledby="informacion-titulo">
          <Container className="py-3">
            <div className="text-center mb-5">
              <span className="seccion-etiqueta">Antes de reservar</span>
              <h2 id="informacion-titulo" className="display-6 fw-bold mt-2 mb-2">
                Información importante para tu evento
              </h2>
              <p className="text-muted mx-auto mb-0 texto-limitado">
                Conoce las condiciones generales del servicio y algunos detalles útiles para planificar con tranquilidad.
              </p>
            </div>

            <Row className="g-4 align-items-stretch">
              <Col lg={6}>
                <div className="panel-detalle p-4 p-md-5 rounded-4 h-100">
                  <h3 className="h4 fw-bold mb-4">Condiciones generales</h3>
                  <Accordion className="acordeon-botanico" flush defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Reserva y confirmación</Accordion.Header>
                      <Accordion.Body className="text-muted">
                        La fecha se reserva una vez aceptada la cotización y realizado el anticipo acordado. La disponibilidad está sujeta a confirmación previa.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Cantidad de invitados</Accordion.Header>
                      <Accordion.Body className="text-muted">
                        La cantidad final de personas debe confirmarse con anticipación. Los cambios posteriores están sujetos a disponibilidad y ajustes en la propuesta.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Cambios y cancelaciones</Accordion.Header>
                      <Accordion.Body className="text-muted">
                        Los cambios de fecha o menú deben solicitarse con margen de tiempo. Las cancelaciones se evalúan de acuerdo con los insumos adquiridos previamente.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Montaje y ubicación</Accordion.Header>
                      <Accordion.Body className="text-muted">
                        El horario de montaje, logística del lugar y traslado se coordinan antes del evento para asegurar puntualidad.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>

              <Col lg={6}>
                <aside className="panel-informacion p-4 p-md-5 rounded-4 h-100">
                  <h3 className="h4 fw-bold mb-4 text-white">Información adicional</h3>
                  <ul className="lista-informacion mb-0">
                    <li>
                      <strong>Planificación</strong>
                      <span>Recomendamos solicitar la cotización con suficiente anticipación, especialmente para fechas de alta demanda.</span>
                    </li>
                    <li>
                      <strong>Menús Especiales</strong>
                      <span>Podemos adaptar el menú para preferencias vegetarianas y restricciones alimentarias informadas previamente.</span>
                    </li>
                    <li>
                      <strong>Cobertura</strong>
                      <span>Atendemos eventos en San Carlos y zonas cercanas; otras ubicaciones se revisan al preparar la propuesta.</span>
                    </li>
                    <li>
                      <strong>Propuesta Personalizada</strong>
                      <span>El precio final depende del menú, cantidad de invitados, ubicación, montaje y personal requerido.</span>
                    </li>
                  </ul>
                </aside>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Banner Cotización */}
        <section className="py-5 my-4">
          <Container>
            <div className="panel-valores p-5 rounded-5 text-center position-relative overflow-hidden shadow-lg">
              <h2 className="display-6 fw-bold mb-3 text-white">¿Estás organizando un evento especial?</h2>
              <p className="lead text-verde-niebla mb-4 mx-auto texto-limitado">
                Cuéntanos sobre tu idea y diseñemos una propuesta gastronómica inolvidable.
              </p>
              <Button
                  as={Link}
                  to="/cotizacion"
                  size="lg"
                  className="btn-botanico-outline btn-cta-cotizacion shadow-md px-5 py-3 fw-bold"
              >
                Solicitar cotización personalizada
              </Button>
            </div>
          </Container>
        </section>
      </>
  );
}

export default Home;