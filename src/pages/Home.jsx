import Header from '../components/Header';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Coverage from '../components/Coverage';
import Projects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    Aos.init();
  return (
    <div>
      <Header />


      <section id="inicio" className="py-5 mt-2">
        <Hero />
      </section>
      <section data-aos="fade-up" id="sobre-nosotros">
        <AboutUs />
      </section>
      <section data-aos="fade-up" id="servicios">
        <Services />
      </section>
      <section data-aos="fade-up" id="beneficios">
        <Benefits />
      </section>
      <section data-aos="fade-up" id="cobertura">
        <Coverage />
      </section>
      <section data-aos="fade-up" id="proyectos-destacados">
        <Projects />
      </section>
      <section data-aos="fade-up" id="testimonios">
        <Testimonials />
      </section>
      <section data-aos="fade-up" id="contacto">
        <ContactForm />
      </section>
      

      <Footer />
    </div>
  );
}
