import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Accordion, Row, Col } from "react-bootstrap";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await axios.get("https://df-strapi-production.up.railway.app/api/faqs?populate&sort=id:asc");
        setFaqData(response.data.data);  // Accedemos a 'data' directamente
        console.log(response.data.data); // Verifica la estructura de los datos
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  if (loading) {
    return <p>Cargando preguntas frecuentes...</p>;
  }

  return (
    <Row>
        <Col md={2} sm={0}></Col>
        <Col md={8}>
            <Container className="faq-section">
            <h2>Preguntas Frecuentes</h2>
            <Accordion defaultActiveKey="0" className="faq-list pb-5" flush>
                {faqData.length > 0 ? (
                faqData.map((faq, index) => (
                    <Accordion.Item key={faq.id} eventKey={index.toString()}>
                    <Accordion.Header>{faq.pregunta}</Accordion.Header>
                    <Accordion.Body>
                        <p>{faq.respuesta}</p>
                    </Accordion.Body>
                    </Accordion.Item>
                ))
                ) : (
                <p>No hay preguntas frecuentes disponibles.</p>
                )}
            </Accordion>
            </Container>
        </Col>
        <Col md={2} sm={0}></Col>
    </Row>
  );
};

export default Faq;