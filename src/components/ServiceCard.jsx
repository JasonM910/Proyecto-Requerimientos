import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCard({ id, titulo, descripcion, tipoEvento, caracteristicas }) {
  return (
    <Card className="card card-servicio h-100 p-3 shadow-sm">
      <Card.Body className="card-body d-flex flex-column">
        {tipoEvento && <span className="seccion-etiqueta mb-2">{tipoEvento}</span>}

        <Card.Title as="h3" className="h5 fw-bold titulo-servicio">
          {titulo}
        </Card.Title>

        <Card.Text className="text-muted flex-grow-1">
          {descripcion}
        </Card.Text>

        {caracteristicas && (
          <ul className="caracteristicas-resumen small mb-2">
            {caracteristicas.map((caracteristica) => (
              <li key={caracteristica}>{caracteristica}</li>
            ))}
          </ul>
        )}

        <Link to={`/servicios/${id}`} className="btn btn-botanico-outline mt-3">
          Consultar características
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
