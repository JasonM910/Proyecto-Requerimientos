import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/services";
import menus from "../data/menus";

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

      <section className="seccion-menus py-5" aria-labelledby="menus-titulo">
        <Container>
          <div className="text-center mb-5">
            <span className="seccion-etiqueta">Opciones gastronómicas</span>
            <h2 id="menus-titulo" className="mt-2 mb-2">Nuestros menús</h2>
            <p className="text-muted mx-auto mb-0 texto-limitado">
              Explora nuestras propuestas base. Cada menú puede adaptarse a las necesidades y preferencias de tu evento.
            </p>
          </div>

          <Row className="g-4">
            {menus.map((menu) => (
              <Col key={menu.id} md={6} lg={4}>
                <article className="card-menu h-100 rounded-4 overflow-hidden">
                  <div className="imagen-menu-placeholder" role="img" aria-label={`Espacio para imagen de ${menu.nombre}`}>
                    <span aria-hidden="true">Imagen del menú</span>
                  </div>
                  <div className="p-4">
                    <span className="seccion-etiqueta">{menu.categoria}</span>
                    <h3 className="h5 fw-bold mt-2 mb-2">{menu.nombre}</h3>
                    <p className="text-muted">{menu.descripcion}</p>
                    <h4 className="h6 mb-2">Opciones incluidas</h4>
                    <ul className="lista-menu small mb-0">
                      {menu.opciones.map((opcion) => <li key={opcion}>{opcion}</li>)}
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
