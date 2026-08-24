import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCard({ id, titulo, descripcion }) {
  return (
    <Card className="card card-servicio h-100 p-3 shadow-sm">
      <Card.Body className="card-body d-flex flex-column text-center">
        {/* futuro icono dinamico maybe */}
        <div className="icono-contenedor mx-auto mb-3">
          {/* iconoooooo */}
        </div>

        <Card.Title as="h5" className={"fw-bold titulo-servicio"}>
          {titulo}
        </Card.Title>

        <Card.Text className="text-muted flex-grow-1">
          {descripcion}
        </Card.Text>

        {/* btn a los detalles del servicio */}
        <Link to={`/servicios/${id}`} className="btn btn-botanico-outline mt-3">
          Ver detalles
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;