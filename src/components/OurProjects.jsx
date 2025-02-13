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
          "https://df-strapi-production.up.railway.app/api/proyectos?populate=*&sort=id:asc"
        );
        setProjects(response.data.data);
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
        <h5 className="text-center">Ejecutamos proyectos de alta calidad con resultados garantizados.</h5>
        <Row className="mt-4">
          {projects.map((project) => {
            const beforeImage = project.imagen_antes
              ? `http://localhost:1337${project.imagen_antes.url}`
              : null;
            const afterImage = project.imagen_despues
              ? `http://localhost:1337${project.imagen_despues.url}`
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
                        <Carousel.Caption>
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
                        <Carousel.Caption>
                          <p>Después</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{project.titulo}</Card.Title>
                    <Card.Text>{project.descripcion}</Card.Text>
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
