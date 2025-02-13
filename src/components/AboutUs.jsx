import { useState, useEffect } from "react";
import { Col, Row, Container, Image, Button, Modal, Carousel } from "react-bootstrap";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../app.css"; // Asegúrate de importar el archivo CSS

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el Modal
  const [aboutData, setAboutData] = useState(null); // Estado para los datos del endpoint

  // Función para manejar el toggle del Modal
  const toggleModal = () => setShowModal(!showModal);

  // Efecto para obtener los datos del endpoint "sobre-nosotros"
  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/sobre-nosotross");
        setAboutData(response.data.data[0]); // Accedemos al primer objeto del arreglo 'data'
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchAboutUs();
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Si los datos aún no están disponibles, muestra un mensaje de carga
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
              <h3>{aboutData.titulo}</h3> {/* Título desde el endpoint */}
              <p>{aboutData.texto}</p> {/* Texto desde el endpoint */}
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
            {/* Botón que abre el Modal */}
            <Button variant="warning" onClick={toggleModal} className="m-3">
              Ver Videos
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Image src="../src/assets/placeholder.png" fluid />
          </Col>
        </Row>
      </Container>

      {/* Modal con el carrusel de videos embebidos */}
      <Modal
        show={showModal}
        onHide={toggleModal}
        size="xl"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        className="full-screen-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuestros videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {/* Video 1 */}
            <Carousel.Item>
              <div className="video-container">
                <iframe
                  className="embed-responsive-item"
                  src={aboutData.video1} // Usamos el video1 desde el endpoint
                  title="Video 1"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>

            {/* Video 2 */}
            <Carousel.Item>
              <div className="video-container">
                <iframe
                  className="embed-responsive-item"
                  src={aboutData.video2} // Usamos el video2 desde el endpoint
                  title="Video 2"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>

            {/* Video 3 */}
            <Carousel.Item>
              <div className="video-container">
                <iframe
                  className="embed-responsive-item"
                  src={aboutData.video3} // Usamos el video3 desde el endpoint
                  title="Video 3"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}
