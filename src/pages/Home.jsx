import { Accordion, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/services";

function Home() {
  return (
    <>
      {/* Presentación e identidad del negocio */}
      <section className="hero-inicio py-5">
        <Container className="text-center py-4">
          <span className="hero-etiqueta">Cocina · Celebración · Experiencia</span>

          <h1 className="display-4 fw-bold">
            Catering Services
          </h1>

          <p className="lead mt-3 text-muted">
            Sabor que reúne. Creamos experiencias gastronómicas para tus eventos especiales.
          </p>

          <Button
            as={Link}
            to="/servicios"
            size="lg"
            className="btn-botanico mt-3 shadow-sm"
          >
            Ver servicios
          </Button>

        </Container>
      </section>

      {/* Información general del negocio */}
      <section className="py-5" aria-labelledby="sobre-nosotros-titulo">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <span className="seccion-etiqueta">Quiénes somos</span>
              <h2 id="sobre-nosotros-titulo" className="mt-2 mb-3">
                Convertimos cada evento en un momento para recordar
              </h2>
              <p className="text-muted mb-3">
                Somos un negocio de catering dedicado a planificar y servir
                experiencias gastronómicas para celebraciones sociales y eventos
                corporativos. Adaptamos cada propuesta al tipo de evento, cantidad
                de invitados y preferencias de nuestros clientes.
              </p>
              <p className="text-muted mb-0">
                Nuestro equipo acompaña cada detalle, desde la selección del menú
                hasta la presentación y el servicio, con ingredientes frescos,
                atención cercana y una organización confiable.
              </p>
            </Col>

            <Col lg={5}>
              <div className="panel-valores p-4 p-md-5 rounded-4">
                <h3 className="h5 mb-4">Lo que nos distingue</h3>
                <ul className="lista-valores mb-0">
                  <li>Menús adaptados a cada ocasión</li>
                  <li>Ingredientes frescos y de calidad</li>
                  <li>Presentación cuidada y servicio cercano</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Servicios */}
      <section className="py-5">

        <Container>

          <h2 className="text-center mb-4">
            Nuestros servicios
          </h2>

          <Row className="g-4">

            {servicios.map((servicio) => (
              <Col
                key={servicio.id}
                md={4}
              >

                <ServiceCard
                  id={servicio.id}
                  titulo={servicio.titulo}
                  descripcion={servicio.descripcion}
                />

              </Col>
            ))}

          </Row>

        </Container>

      </section>


      {/* Información complementaria */}
      <section className="seccion-informacion py-5" aria-labelledby="informacion-titulo">
        <Container>
          <div className="text-center mb-5">
            <span className="seccion-etiqueta">Antes de reservar</span>
            <h2 id="informacion-titulo" className="mt-2 mb-2">
              Información importante para tu evento
            </h2>
            <p className="text-muted mx-auto mb-0 texto-limitado">
              Conoce las condiciones generales del servicio y algunos detalles útiles para planificar con tranquilidad.
            </p>
          </div>

          <Row className="g-4 align-items-start">
            <Col lg={7}>
              <div className="panel-detalle p-4 p-md-5 rounded-4">
                <h3 className="h4 mb-4">Condiciones generales</h3>
                <Accordion className="acordeon-botanico" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Reserva y confirmación</Accordion.Header>
                    <Accordion.Body>
                      La fecha se reserva una vez aceptada la cotización y realizado el anticipo acordado. La disponibilidad está sujeta a confirmación.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Cantidad de invitados</Accordion.Header>
                    <Accordion.Body>
                      La cantidad final de personas debe confirmarse con anticipación. Los cambios posteriores están sujetos a disponibilidad y pueden modificar el precio.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Cambios y cancelaciones</Accordion.Header>
                    <Accordion.Body>
                      Los cambios de fecha, menú o alcance deben solicitarse con anticipación. Las cancelaciones y devoluciones se evaluarán según los gastos ya realizados.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Montaje y ubicación</Accordion.Header>
                    <Accordion.Body>
                      El acceso, horario de montaje, condiciones del lugar y costos de traslado se coordinan antes del evento y deben quedar incluidos en la propuesta final.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>

            <Col lg={5}>
              <aside className="panel-informacion p-4 p-md-5 rounded-4">
                <h3 className="h4 mb-4">Información adicional</h3>
                <ul className="lista-informacion mb-0">
                  <li><strong>Planificación</strong><span>Recomendamos solicitar la cotización con suficiente anticipación, especialmente para fechas de alta demanda.</span></li>
                  <li><strong>Opciones especiales</strong><span>Podemos adaptar el menú para preferencias vegetarianas y restricciones alimentarias informadas previamente.</span></li>
                  <li><strong>Área de servicio</strong><span>Atendemos eventos en San José y zonas cercanas; otras ubicaciones se revisan al preparar la propuesta.</span></li>
                  <li><strong>Propuesta personalizada</strong><span>El precio final depende del menú, cantidad de invitados, ubicación, montaje y personal requerido.</span></li>
                </ul>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Cotización */}
      <section className="encabezado-pagina py-5">

        <Container className="text-center">

          <h2>
            ¿Estás organizando un evento?
          </h2>

          <p>
            Solicita una cotización para conocer las opciones disponibles.
          </p>

          <Button
            as={Link}
            to="/cotizacion"
            className="btn-botanico mt-2"
          >
            Solicitar cotización
          </Button>

        </Container>

      </section>
    </>
  );
}

export default Home;
