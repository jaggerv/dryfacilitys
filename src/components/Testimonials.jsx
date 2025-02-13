import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://df-strapi-production.up.railway.app/api/testimonios?populate=*&sort=id:asc"
        );
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-light pt-5">
      <Container className="my-5">
        <h2>Testimonios de Clientes</h2>
        <h3 className="mt-5">
          Lo que nuestros clientes dicen de nosotros
        </h3>
        <h5>La satisfacción de nuestros clientes es nuestra mayor recompensa. Aquí hay algunas opiniones de quienes han confiado en nuestros servicios.</h5>
        <Row className="mt-4">
          {testimonials.map((testimonial) => (
            <Col md={6} lg={4} key={testimonial.id} className="mb-4">
              <Card className="shadow-sm p-4 testimonialCard">
                <Card.Body>
                  <Card.Text className="text-muted">
                    "{testimonial.testimonio}"
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-end">
                    <strong>- {testimonial.cliente}</strong>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
