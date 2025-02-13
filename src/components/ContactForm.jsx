import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactForm() {
    return (
      <Container>
      <h2>Contacto</h2>
      <Row>
        <Col md={1} sm={0}></Col>
        <Col md={5}>
          <Container className="my-5">
            <h4 className="text-start">Información de contacto</h4>
            <ul className="list-unstyled">
              <li className="my-3"><i className="bi bi-telephone text-warning"></i> +56 9 8305 6957</li>
              <li className="my-3"><i className="bi bi-envelope-at text-warning"></i> contacto@dryfacilitys.cl</li>
              <li className="my-3"><i className="bi bi-geo-alt text-warning"></i> Puerto Varas, Región de Los Lagos</li>
            </ul>
          </Container>
        </Col>
        <Col md={5}>
          <Container>
            <form className="p-5">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <Button variant="warning" type="submit">Enviar</Button>
            </form>
          </Container>
        </Col>
        <Col md={1} sm={0}></Col>
      </Row>
      </Container>
    );
  }