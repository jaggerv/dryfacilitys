import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Accordion, Row, Col } from "react-bootstrap";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        // Realizamos la solicitud al nuevo endpoint
        const response = await axios.get("https://panel.dryfacilitys.cl/wp/wp-json/wp/v2/faqs");
        
        // Verifica la estructura de los datos que recibes
        console.log(response.data);

        // Accedemos a los datos dentro de 'acf' y los asignamos a 'faqData'
        if (response.data && Array.isArray(response.data)) {
          setFaqData(response.data);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []); // Este useEffect solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando preguntas frecuentes...</p>;
  }

  return (
    <Row>
      <Col md={2} sm={0}></Col>
      <Col md={8}>
        <Container className="faq-section">
          <h2>Preguntas Frecuentes</h2>
          <Accordion defaultActiveKey="none" className="faq-list pb-5" flush>
            {faqData.length > 0 ? (
              faqData.map((faq, index) => (
                <Accordion.Item key={faq.id} eventKey={index.toString()}>
                  <Accordion.Header><b>{faq.acf.pregunta}</b></Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.acf.respuesta}</p>
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
