import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "emailjs-com"; // Importamos la librería de EmailJS

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Verifica que los datos no estén vacíos
    if (!name || !email || !message) {
      setResponseMessage("Todos los campos son obligatorios.");
      setIsSubmitting(false);
      return;
    }
  
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
  
    console.log("Enviando estos datos a EmailJS:", templateParams); // Agregar consola para depuración
  
    try {
      const result = await emailjs.send(
        "service_9119dhc", // ID del servicio
        "template_wz75san", // ID de la plantilla
        templateParams,    // Datos de la plantilla
        "fdc0U8gd6IdoihgsR" // ID del usuario
      );
  
      setResponseMessage("Correo enviado correctamente.");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setResponseMessage("Hubo un error al enviar el correo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <h2>Contacto</h2>
      <Row>
        <Col md={1} sm={0}></Col>
        <Col md={5}>
          <Container className="my-5">
            <h4 className="text-start">Información de contacto</h4>
            <ul className="list-unstyled">
              <li className="my-3">
                <i className="bi bi-telephone iconColorContact"></i> +56 9 8305 6957
              </li>
              <li className="my-3">
                <i className="bi bi-envelope-at iconColorContact"></i> contacto@dryfacilitys.cl
              </li>
              <li className="my-3">
                <i className="bi bi-geo-alt iconColorContact"></i> Puerto Varas, Región de Los Lagos
              </li>
            </ul>
          </Container>
        </Col>
        <Col md={5}>
          <Container>
            <form onSubmit={handleSubmit} className="p-5">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <Button type="submit" className="dryButton" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </Container>
        </Col>
        <Col md={1} sm={0}></Col>
      </Row>
    </Container>
  );
}