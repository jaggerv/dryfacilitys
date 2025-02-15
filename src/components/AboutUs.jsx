import { useState, useEffect } from "react";
import { Col, Row, Container, Image, Button, Modal, Carousel } from "react-bootstrap";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../app.css"; // Asegúrate de importar el archivo CSS

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [aboutData, setAboutData] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get(
          "https://panel.dryfacilitys.cl/wp/wp-json/wp/v2/sobre_nosotros"
        );

        // Extraer datos desde ACF
        if (response.data.length > 0) {
          const acfData = response.data[0].acf;
          setAboutData({
            titulo: acfData?.titulo || "Título no disponible",
            texto: acfData?.texto || "Descripción no disponible.",
            punto1: acfData?.punto1 || "Punto 1 no disponible",
            punto2: acfData?.punto2 || "Punto 2 no disponible",
            punto3: acfData?.punto3 || "Punto 3 no disponible",
            imagen: acfData?.imagen?.url || "https://via.placeholder.com/500",
            video1: acfData?.video1 || "",
            video2: acfData?.video2 || "",
            video3: acfData?.video3 || "",
          });
        }
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchAboutUs();
  }, []);

  if (!aboutData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Sobre nosotros</h2>
      <Container className="my-5 bg-light py-5">
        <Row>
          <Col xs={12} md={6}>
            <Container>
              <h3>{aboutData.titulo}</h3>
              <p>{aboutData.texto}</p>
            </Container>
            <Container>
              <ul className="list-unstyled">
                <li className="my-4">
                  <i className="bi bi-check-circle text-success me-2"></i> {aboutData.punto1}
                </li>
                <li className="my-4">
                  <i className="bi bi-check-circle text-success me-2"></i> {aboutData.punto2}
                </li>
                <li className="my-4">
                  <i className="bi bi-check-circle text-success me-2"></i> {aboutData.punto3}
                </li>
              </ul>
            </Container>
            <Button variant="warning" onClick={toggleModal} className="m-3">
              Ver Videos
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Image src={aboutData.imagen} fluid alt="Imagen Sobre Nosotros" className="custom-imagen" />
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={toggleModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Nuestros videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {aboutData.video1 && (
              <Carousel.Item>
                <div className="video-container">
                  <iframe
                    className="embed-responsive-item"
                    src={aboutData.video1}
                    title="Video 1"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>
            )}
            {aboutData.video2 && (
              <Carousel.Item>
                <div className="video-container">
                  <iframe
                    className="embed-responsive-item"
                    src={aboutData.video2}
                    title="Video 2"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>
            )}
            {aboutData.video3 && (
              <Carousel.Item>
                <div className="video-container">
                  <iframe
                    className="embed-responsive-item"
                    src={aboutData.video3}
                    title="Video 3"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}
