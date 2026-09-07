import { Container } from "react-bootstrap";

function Quote() {
  return (
    <main>
      <section className="encabezado-pagina py-5">
        <Container className="text-center py-3">
          <span className="seccion-etiqueta">Planeemos tu evento</span>
          <h1 className="display-5 fw-bold mt-2">Solicitar cotización</h1>
          <p className="lead text-muted mx-auto mb-0 texto-limitado">
            Cuéntanos qué estás organizando y prepararemos una propuesta acorde con tus necesidades.
          </p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="panel-detalle p-4 p-md-5 rounded-4 mx-auto texto-limitado text-center">
            <h2 className="h4 mb-3">Tu evento comienza aquí</h2>
            <p className="text-muted mb-0">
              Completa los datos de tu evento para recibir una propuesta personalizada.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Quote;
