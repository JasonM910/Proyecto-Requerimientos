import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Home() {

  const servicios = [
    {
      id: 1,
      titulo: "Catering para bodas",
      descripcion:
        "Servicio de alimentación para bodas y celebraciones especiales."
    },
    {
      id: 2,
      titulo: "Catering para cumpleaños",
      descripcion:
        "Opciones de alimentación para cumpleaños y reuniones familiares."
    },
    {
      id: 3,
      titulo: "Catering empresarial",
      descripcion:
        "Servicio de catering para reuniones, capacitaciones y eventos empresariales."
    }
  ];

  return (
    <>
      {/* Presentación principal */}
      <section className="bg-light py-4">
        <Container className="text-center py-4">

          <h1 className="display-4 fw-bold">
            Catering Services
          </h1>

          <p className="lead mt-3">
            El servicio de catering ideal para tus eventos.
          </p>

          <Button
            as={Link}
            to="/servicios"
            size="lg"
            className="mt-3"
          >
            Ver servicios
          </Button>

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


      {/* Cotización */}
      <section className="bg-light py-5">

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
            variant="success"
          >
            Solicitar cotización
          </Button>

        </Container>

      </section>
    </>
  );
}

export default Home;