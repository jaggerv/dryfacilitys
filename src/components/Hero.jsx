import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios"; // Importa el archivo CSS
import "../App.css";


export default function Hero() {
  const [heroImage, setHeroImage] = useState(""); // Estado para la imagen del Hero

  useEffect(() => {
    // Función para obtener la imagen principal del nuevo servicio
    const fetchHeroImage = async () => {
      try {
        const response = await axios.get(
          "https://panel.dryfacilitys.cl/wp/wp-json/wp/v2/imagen_principal"
        );

        if (response.data && response.data[0]?.acf?.imagen?.url) {
          const imageUrl = response.data[0].acf.imagen.url; // Extrae la URL de la imagen
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
        backgroundImage: heroImage ? `url(${heroImage})` : "none", // Usa la imagen obtenida o ninguno
      }}
    >
      {/* Agregar una etiqueta img para usar lazy loading y srcset para imágenes responsivas */}
      {heroImage && (
        <img
          srcSet={`${heroImage}?w=600 600w, ${heroImage}?w=1200 1200w, ${heroImage}?w=1800 1800w`} // Varias versiones de la imagen según el ancho
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          src={heroImage} // Usamos la misma imagen si srcset no está soportado
          alt="Hero Image"
          loading="lazy" // Carga perezosa
        />
      )}

      <Container className="d-flex justify-content-center align-items-center h-100">
        <div className="hero-content">
          <h1 className="display-5">Protección y durabilidad para sus techumbres y estructuras</h1>
          <p className="lead mb-5">
            Expertos en impermeabilización con membranas de alta tecnología. Servicios de revisión, reparación y mantenimiento.
          </p>
          <Button variant="outline-warning" className="text-white" size="md" target="_blank" href="https://wa.me/56983056957">
            ¡Solicite una inspección gratuita y proteja su inversión!
          </Button>
        </div>
      </Container>
    </div>
  );
}

