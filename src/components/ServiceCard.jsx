import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCard({ id, titulo, descripcion }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>
          {descripcion}
        </Card.Text>

        <Button
          as={Link}
          to={`/servicios/${id}`}
          variant="primary"
          className="mt-auto"
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;