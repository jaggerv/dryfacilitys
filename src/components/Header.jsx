import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import icon from "../assets/dry_black2.svg";  // Importa el icono

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // lg en Bootstrap es 992px
    };

    handleResize(); // Llamada inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <a href="#inicio">
            {/* Usar el icono importado */}
            <img src={icon} alt="icon" width="150" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="inicio" smooth={true} duration={500}>
                INICIO
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="sobre-nosotros" smooth={true} duration={500}>
                NOSOTROS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="servicios" smooth={true} duration={500}>
                SERVICIOS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="beneficios" smooth={true} duration={500}>
                BENEFICIOS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="cobertura" smooth={true} duration={500}>
                COBERTURA
              </Link>
            </Nav.Link>

            {isMobile ? (
              <>
                <Nav.Link>
                  <Link to="proyectos-destacados" smooth={true} duration={500}>
                    PROYECTOS DESTACADOS
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="testimonios" smooth={true} duration={500}>
                    TESTIMONIOS
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <NavDropdown title="MÁS" id="basic-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item as="div">
                  <Link
                    to="proyectos-destacados"
                    smooth={true}
                    duration={500}
                    className="dropdown-Navbr"
                  >
                    PROYECTOS DESTACADOS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link
                    to="testimonios"
                    smooth={true}
                    duration={500}
                    className="dropdown-Navbr"
                  >
                    TESTIMONIOS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link
                    to="faqs"
                    smooth={true}
                    duration={500}
                    className="dropdown-Navbr"
                  >
                    FAQS
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link>
              <Link to="contacto" smooth={true} duration={500}>
                CONTACTO
              </Link>
            </Nav.Link>
          </Nav>

          {/* Redes sociales */}
          <Nav className={isMobile ? "flex-column mt-3" : "d-flex justify-content-end"}>
            <Nav.Link href="https://facebook.com" target="_blank" className="social-icon">
              <i className="bi bi-facebook socialIcon"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" className="social-icon">
              <i className="bi bi-twitter-x socialIcon"></i>
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" className="social-icon">
              <i className="bi bi-instagram socialIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}