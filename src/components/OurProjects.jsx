import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import "../App.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://panel.dryfacilitys.cl/wp/wp-json/wp/v2/proyectos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-light pt-5">
      <Container className="my-5">
        <h2 className="my-5 text-center">Nuestros Proyectos</h2>
        <h5 className="text-center">Antes y después</h5>
        <Row className="mt-4">
          {projects.map((project) => {
            const beforeImage = project.acf.imagen_antes
              ? project.acf.imagen_antes.url
              : null;
            const afterImage = project.acf.imagen_despues
              ? project.acf.imagen_despues.url
              : null;

            return (
              <Col md={6} lg={4} key={project.id} className="mb-4">
                <Card className="shadow-sm projectCard">
                  <Carousel>
                    {beforeImage && (
                      <Carousel.Item>
                        <img
                          src={beforeImage}
                          className="d-block w-100 projectImg"
                          alt="Antes"
                        />
                        <Carousel.Caption className="caption-text-shadow">
                          <p>Antes</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )}
                    {afterImage && (
                      <Carousel.Item>
                        <img
                          src={afterImage}
                          className="d-block w-100 projectImg"
                          alt="Después"
                        />
                        <Carousel.Caption className="caption-text-shadow">
                          <p>Después</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{project.acf.titulo}</Card.Title>
                    <Card.Text>{project.acf.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
