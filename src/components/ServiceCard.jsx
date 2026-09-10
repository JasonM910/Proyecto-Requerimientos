import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceCard({ id, titulo, descripcion, tipoEvento, caracteristicas, imagen }) {
  return (
      <Card className="card-servicio h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        {/* Si tienes imágenes, se mostrarán; de lo contrario, renderiza un placeholder elegante */}
        {imagen ? (
            <div className="card-img-wrapper overflow-hidden position-relative">
              <Card.Img
                  variant="top"
                  src={imagen}
                  alt={titulo}
                  style={{ height: "200px", objectFit: "cover" }}
                  className="card-img-top-custom"
              />
            </div>
        ) : (
            <div className="imagen-menu-placeholder d-flex align-items-center justify-content-center text-uppercase fw-semibold">
              <span>{tipoEvento || "Catering Service"}</span>
            </div>
        )}

        <Card.Body className="d-flex flex-column p-4">
          {tipoEvento && (
              <div className="mb-2">
            <span className="badge rounded-pill bg-verde-niebla text-verde-etiqueta px-3 py-2 fw-semibold fs-7">
              {tipoEvento}
            </span>
              </div>
          )}

          <Card.Title as="h3" className="h5 fw-bold titulo-servicio mb-2">
            {titulo}
          </Card.Title>

          <Card.Text className="text-muted small flex-grow-1 mb-3">
            {descripcion}
          </Card.Text>

          {caracteristicas && caracteristicas.length > 0 && (
              <ul className="caracteristicas-resumen list-unstyled small mb-3">
                {caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="d-flex align-items-center mb-1 text-muted">
                      <i className="bi bi-check-circle-fill text-verde-salvia me-2"></i>
                      <span>{caracteristica}</span>
                    </li>
                ))}
              </ul>
          )}

          <Link to={`/servicios/${id}`} className="btn btn-botanico-outline w-100 text-center py-2 mt-auto">
            Consultar características
          </Link>
        </Card.Body>
      </Card>
  );
}

export default ServiceCard;