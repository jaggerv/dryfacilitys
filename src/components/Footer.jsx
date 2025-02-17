import { Container, Col, Row, Image } from "react-bootstrap";
import dryWhite2 from "../assets/dry_white2.svg"; // Importación del SVG
import "../App.css";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-5">
      <Container className="footer-top">
        <Row className="justify-content-center">
          <Col md={4} xs={12} className="d-flex flex-column align-items-md-start align-items-center">
            {/* Usar el SVG importado */}
            <Image src={dryWhite2} className="logoFooter py-3" alt="Logo Dry Facilitys" />
            <ul className="list-unstyled text-md-start text-center">
              <li className="my-3"><i className="bi bi-geo-alt iconColorFooter"></i> Cobertura</li>
              <li>Puerto Varas</li> 
              <li>Santiago</li> 
              <li>Concepción</li> 
              <li>Valdivia</li> 
              <li className="my-3"><i className="bi bi-telephone iconColorFooter"></i> +56 9 8305 6957</li>
              <li className="my-3"><i className="bi bi-envelope-at iconColorFooter"></i> contacto@dryfacilitys.cl</li>
            </ul>
            <Container className="d-flex justify-content-start justify-content-center justify-content-md-start">
              <a href="https://instagram.com/dryfacilitys" target="_blank" className="text-white">
                <i className="bi bi-instagram socialIcon m-2"></i>
              </a>
            </Container>
          </Col>

          <Col md={4} xs={0}></Col>

          <Col md={4} xs={12} className="d-flex flex-column align-items-md-start align-items-center">
            <Container className="py-5 text-center">
              <h4 className="text-center">Links de utilidad</h4>
              <ul className="list-unstyled">
                <li><a className="footerLinks" href="#inicio">Inicio</a></li>
                <li><a className="footerLinks" href="#sobre-nosotros">Nosotros</a></li>
                <li><a className="footerLinks" href="#servicios">Servicios</a></li>
                <li><a className="footerLinks" href="#beneficios">Beneficios</a></li>
                <li><a className="footerLinks" href="#cobertura">Cobertura</a></li>
                <li><a className="footerLinks" href="#proyectos-destacados">Proyectos destacados</a></li>
                <li><a className="footerLinks" href="#testimonios">Testimonios</a></li>
                <li><a className="footerLinks" href="#faqs">FAQs</a></li>
                <li><a className="footerLinks" href="#contacto">Contacto</a></li>

              </ul>
            </Container>
          </Col>
        </Row>   
      </Container>
      <hr />
      <Container className="footer-bottom">
        <p>&copy; 2025 <b>Dry Facilitys</b>. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}