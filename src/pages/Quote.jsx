import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const initialForm = { name: "", email: "", phone: "", eventType: "", eventDate: "", guests: "", message: "" };

function Quote() {
  const [formData, setFormData] = useState(initialForm);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      setSubmitted(false);
      return;
    }

    setValidated(false);
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
      <main>
        <section className="encabezado-pagina py-5 border-bottom border-verde-salvia-light">
          <Container className="text-center py-4">
            <span className="seccion-etiqueta">Planeemos tu evento</span>
            <h1 className="display-4 fw-bold mt-2">Solicitar cotización</h1>
            <p className="lead text-muted mx-auto mb-0 texto-limitado">
              Cuéntanos qué estás organizando y prepararemos una propuesta acorde con tus necesidades.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container className="py-3">
            <Row className="g-4 g-lg-5 align-items-start">
              <Col lg={4}>
                <aside className="panel-contacto p-4 p-md-5 rounded-4 shadow-sm border border-verde-salvia-light">
                  <span className="seccion-etiqueta">Hablemos</span>
                  <h2 className="h3 fw-bold mt-2 mb-3">Estamos para ayudarte</h2>
                  <p className="text-muted mb-4 small">Escríbenos o llámanos y coordinaremos cada detalle de tu evento.</p>
                  <address className="lista-contacto mb-0">
                    <div>
                      <span className="icono-contacto" aria-hidden="true">
                        <i className="bi bi-envelope-fill text-dark fs-5"></i>
                      </span>
                      <div><strong>Correo electrónico</strong><a href="mailto:info@cateringservices.com">info@cateringservices.com</a></div>
                    </div>
                    <div>
                      <span className="icono-contacto" aria-hidden="true">
                        <i className="bi bi-telephone-fill text-dark fs-5"></i>
                      </span>
                      <div><strong>Teléfono y WhatsApp</strong><a href="tel:+50687839143">+506 8783-9143</a></div>
                    </div>
                    <div>
                      <span className="icono-contacto" aria-hidden="true">
                        <i className="bi bi-geo-alt-fill text-dark fs-5"></i>
                      </span>
                      <div><strong>Ubicación</strong><span>Ciudad Quesada, San Carlos</span></div>
                    </div>
                    <div>
                      <span className="icono-contacto" aria-hidden="true">
                        <i className="bi bi-clock-fill text-dark fs-5"></i>
                      </span>
                      <div><strong>Horario de atención</strong><span>Lunes a sábado, 8:00 a. m. – 6:00 p. m.</span></div>
                    </div>
                  </address>
                </aside>
              </Col>

              <Col lg={8}>
                <div className="panel-detalle p-4 p-md-5 rounded-4 shadow-sm border border-verde-salvia-light">
                  <h2 className="h3 fw-bold mb-2">Cuéntanos sobre tu evento</h2>
                  <p className="text-muted mb-4 small">Los campos marcados con * son obligatorios.</p>

                  {submitted && (
                      <Alert variant="success" className="confirmacion-envio rounded-3 border-0 shadow-xs mb-4" role="status">
                        <Alert.Heading className="h5 fw-bold">¡Solicitud enviada correctamente!</Alert.Heading>
                        <p className="mb-0 small">Gracias por contactarnos. Revisaremos los detalles y te responderemos pronto.</p>
                      </Alert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="quoteName">
                          <Form.Label>Nombre completo *</Form.Label>
                          <Form.Control required name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" autoComplete="name" className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Ingresa tu nombre completo.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="quoteEmail">
                          <Form.Label>Correo electrónico *</Form.Label>
                          <Form.Control required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="nombre@correo.com" autoComplete="email" className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Ingresa un correo electrónico válido.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="quotePhone">
                          <Form.Label>Teléfono *</Form.Label>
                          <Form.Control required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="8888-8888" autoComplete="tel" pattern="[0-9+() -]{8,20}" className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Ingresa un número de teléfono válido.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="quoteEventType">
                          <Form.Label>Tipo de evento *</Form.Label>
                          <Form.Select required name="eventType" value={formData.eventType} onChange={handleChange} className="rounded-3">
                            <option value="">Selecciona una opción</option>
                            <option>Boda</option>
                            <option>Evento corporativo</option>
                            <option>Cumpleaños</option>
                            <option>Celebración familiar</option>
                            <option>Otro</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">Selecciona el tipo de evento.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="quoteDate">
                          <Form.Label>Fecha estimada *</Form.Label>
                          <Form.Control required type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Selecciona una fecha para el evento.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="quoteGuests">
                          <Form.Label>Cantidad de personas *</Form.Label>
                          <Form.Control required type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" placeholder="Ej. 50" className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Indica una cantidad válida de personas.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="quoteMessage">
                          <Form.Label>Detalles de la solicitud *</Form.Label>
                          <Form.Control required as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos sobre el menú, lugar, horario o necesidades especiales." className="rounded-3" />
                          <Form.Control.Feedback type="invalid">Cuéntanos los detalles necesarios para preparar la cotización.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="pt-2">
                        <Button type="submit" className="btn-botanico px-5 py-3 fw-bold w-100 w-md-auto">
                          Enviar solicitud
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
  );
}

export default Quote;