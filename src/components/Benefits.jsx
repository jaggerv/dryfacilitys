import { Container, Row, Col, Figure } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

export default function Benefits() {
    return (
        <Container className="my-5">
            <Container className="mb-5">
                <h2 className="my-5">Beneficios de nuestras membranas</h2>
                <h3>Nuestra membrana multi sellado, autoadherente y recubierta con polímero ASA, ofrece:</h3>
            </Container>
            <Container>
                <Row className="my-5">
                    <Col md={4}>
                        <h5 className="text-center">Durabilidad de 10 años</h5>
                        <Figure className="benefit-circle my-5">
                            <i className="bi bi-cloud-sleet-fill fs-2"></i>
                        </Figure>
                        <p className="text-center">Resistencia comprobada a condiciones climáticas extremas</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-center">Aislamiento térmico y acústico</h5>
                        <Figure className="benefit-circle my-5">
                                <i className="bi bi-volume-mute-fill fs-2"></i>
                        </Figure>
                        <p className="text-center">Reduce el calor y el ruido, mejorando el confort de sus espacios</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-center">Fácil instalación</h5>
                        <Figure className="benefit-circle my-5">
                        <i className="bi bi-emoji-smile-fill fs-2"></i>
                        </Figure>
                        <p className="text-center">Sistema en frío, sin necesidad de máquinas o fuentes energéticas externas</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md={2}></Col>
                    <Col md={4}>
                            <h5 className="text-center">Resistencia a los rayos UV</h5>
                            <Figure className="benefit-circle my-5">
                                <i className="bi bi-sun-fill fs-2"></i>
                            </Figure>
                            <p className="text-center">Mantiene su color y propiedades incluso bajo exposición solar prolongada</p>    
                    </Col>
                    <Col md={4} sm={0}>
                            <h5 className="text-center">Excelente adherencia</h5>
                            <Figure className="benefit-circle my-5">
                                <i className="bi bi-hand-thumbs-up-fill fs-2"></i>
                            </Figure>
                            <p className="text-center">Garantiza una cobertura uniforme y duradera</p>
                    </Col>
                    <Col md={2} sm={0}></Col>
                </Row>
            </Container>
        </Container>
    )
}