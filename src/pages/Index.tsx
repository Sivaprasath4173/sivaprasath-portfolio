import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import Particles from '@/components/portfolio/Particles';

const Index = () => {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
