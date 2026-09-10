import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/services";
import menus from "../data/menus";

function Services() {
  return (
      <main>
        <section className="encabezado-pagina py-5 border-bottom border-verde-salvia-light">
          <Container className="text-center py-4">
            <span className="seccion-etiqueta">Servicios para eventos</span>
            <h1 className="display-4 fw-bold mt-2">Una propuesta para cada ocasión</h1>
            <p className="lead text-muted mx-auto mb-0 texto-limitado">
              Conoce los tipos de eventos que atendemos y encuentra el servicio que mejor se adapta a tu celebración.
            </p>
          </Container>
        </section>

        <section className="py-5" aria-labelledby="tipos-eventos-titulo">
          <Container className="py-3">
            <div className="text-center mb-5">
              <span className="seccion-etiqueta">Categorías</span>
              <h2 id="tipos-eventos-titulo" className="display-6 fw-bold mt-2 mb-2">Tipos de eventos</h2>
              <p className="text-muted text-center mb-0">
                Selecciona un servicio para consultar sus características principales.
              </p>
            </div>

            <Row className="g-4">
              {servicios.map((servicio) => (
                  <Col key={servicio.id} md={6} lg={4}>
                    <ServiceCard
                        id={servicio.id}
                        titulo={servicio.titulo}
                        descripcion={servicio.descripcion}
                        tipoEvento={servicio.tipoEvento}
                        caracteristicas={servicio.caracteristicas ? servicio.caracteristicas.slice(0, 3) : []}
                        imagen={servicio.imagen}
                    />
                  </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="seccion-menus py-5" aria-labelledby="menus-titulo">
          <Container className="py-3">
            <div className="text-center mb-5">
              <span className="seccion-etiqueta">Opciones gastronómicas</span>
              <h2 id="menus-titulo" className="display-6 fw-bold mt-2 mb-2">Nuestros menús</h2>
              <p className="text-muted mx-auto mb-0 texto-limitado">
                Explora nuestras propuestas base. Cada menú puede adaptarse a las necesidades y preferencias de tu evento.
              </p>
            </div>

            <Row className="g-4">
              {menus.map((menu) => (
                  <Col key={menu.id} md={6} lg={4}>
                    <article className="card-menu h-100 rounded-4 overflow-hidden border-0 shadow-sm d-flex flex-column">
                      <div className="card-img-wrapper overflow-hidden position-relative" style={{ height: "180px" }}>
                        {menu.imagen ? (
                            <img
                                src={menu.imagen}
                                alt={menu.nombre}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                className="card-img-top-custom"
                            />
                        ) : (
                            <div className="imagen-menu-placeholder d-flex align-items-center justify-content-center h-100">
                              <span>🍴 {menu.nombre}</span>
                            </div>
                        )}
                      </div>
                      <div className="p-4 d-flex flex-column flex-grow-1">
                        <span className="seccion-etiqueta">{menu.categoria}</span>
                        <h3 className="h5 fw-bold mt-1 mb-2 titulo-servicio">{menu.nombre}</h3>
                        <p className="text-muted small mb-3 flex-grow-1">{menu.descripcion}</p>
                        <h4 className="h6 fw-bold mb-2">Opciones incluidas:</h4>
                        <ul className="lista-menu small mb-0 list-unstyled">
                          {menu.opciones.map((opcion, idx) => (
                              <li key={idx} className="mb-1 text-muted d-flex align-items-center">
                                <span className="me-2 text-verde-etiqueta">•</span>
                                {opcion}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
  );
}

export default Services;