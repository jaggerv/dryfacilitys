import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://panel.dryfacilitys.cl/wp/wp-json/wp/v2/servicios"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-light pt-5">
      <Container className="my-5">
        <Container className="my-5">
          <h2 className="my-5">Nuestros Servicios</h2>
          <h3>Servicios especializados en impermeabilización y reparación</h3>
          <h5>
            Ofrecemos una amplia gama de servicios diseñados para proteger y
            prolongar la vida útil de sus estructuras:
          </h5>
        </Container>

        <Row>
          {services.map((service) => {
            // Obtén la URL de la imagen desde ACF
            const imageUrl = service.acf?.imagen?.url || "";
            const title = service.acf?.titulo || "Servicio sin título";
            const description = service.acf?.descripcion || "";

            return (
              <Col md={6} key={service.id} className="mb-4">
                <Container className="p-5 serviceCard">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="img-fluid serviceImg"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 mt-2">{description}</p>
                </Container>
              </Col>
            );
          })}
        </Row>
        <h4>¿Necesita asesoría o un presupuesto?</h4>
        <Container className="d-flex justify-content-center align-items-center pt-2 pb-5 content-center">
          <Button
            size="lg"
            target="_blank"
            href="https://wa.me/56983056957"
            className="dryButton"
          >
            <i className="bi bi-whatsapp"></i> ¡Contáctenos hoy mismo! 
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Services;