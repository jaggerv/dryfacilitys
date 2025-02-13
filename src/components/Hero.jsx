import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

export default function Hero() {
  const [heroImage, setHeroImage] = useState(""); // Estado para la imagen del Hero

  useEffect(() => {
    // Función para obtener la imagen principal del servicio
    const fetchHeroImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/imagen-principals?populate=imagen&sort=id:asc"
        );
        
        if (response.data.data.length > 0 && response.data.data[0]?.imagen) {
          const imageUrl = `http://localhost:1337${response.data.data[0].imagen.formats.medium?.url || response.data.data[0].imagen.url}`;
          setHeroImage(imageUrl); // Asigna la imagen obtenida al estado
        }
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };

    fetchHeroImage();
  }, []); // Este useEffect se ejecuta una sola vez cuando el componente se monta

  return (
    <div
      className="hero-slide"
      style={{
        backgroundImage: `url(${heroImage || "../src/assets/placeholder.png"})`, // Usa la imagen obtenida o la de respaldo
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Hace que el Hero ocupe toda la ventana
      }}
    >
      <Container className="d-flex justify-content-center align-items-center h-100">
        <div className="text-center text-white hero-content">
          <h1 className="display-5">Protección y durabilidad para sus techumbres y estructuras</h1>
          <p className="lead mb-5">
            Expertos en impermeabilización con membranas de alta tecnología. Servicios de revisión, reparación y mantenimiento.
          </p>
          <Button variant="outline-warning" className="text-white" size="md" target="_blank" href="https://wa.me/">
            ¡Solicite una inspección gratuita y proteja su inversión!
          </Button>
        </div>
      </Container>
    </div>
  );
}
