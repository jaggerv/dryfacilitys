import { Container, Row, Col } from "react-bootstrap";

export default function Coverage() {
    return (
        <Container>
            <h2>Áreas de cobertura</h2>
            <h3 className="my-5">Servicios en las principales regiones de Chile</h3>
        <Row>
            <Col md={5}>
            <Container className="">
                <h5>Operamos en las siguientes regiones, brindando soluciones de impermeabilización de alta calidad:</h5>
                <ul>
                    <li>Región de Los Lagos</li>
                    <li>Región de Los Ríos</li>
                    <li>Santiago y sus alrededores</li>
                    <li>Despachos a todo Chile</li>
                </ul>
            </Container>
            </Col>
            <Col md={7}>
            <Container className="d-flex justify-content-center mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.445633696628!2d-72.975909!3d-41.3209221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618277f097d834b%3A0x58c0618af646fb99!2sDryFacilitys!5e0!3m2!1ses!2scl!4v1739410493993!5m2!1ses!2scl" 
                width="400" 
                height="300"  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Responsive Google Map"
                >    
                </iframe>
            </Container>
                <h5>Sede central: Puerto Varas - Santiago</h5>
                <h6>Contacto: +56 9 8305 6957 | contacto@dryfacilitys.cl</h6>
            </Col>
            
        </Row>
              
        </Container>
    )
}