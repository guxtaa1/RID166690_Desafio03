import { useState, useEffect } from 'react';

function HeroSection() {
  const [mostrarTexto, setMostrarTexto] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTexto(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <h1>Gustavo Rodrigues Oliveira</h1>
      {mostrarTexto && <p>Desenvolvedor Full Stack com foco em Frontend | Especialista em Saúde Digital </p>}
      <button onClick={() => alert('Mais informações em breve!')}>Saber mais</button>
    </section>
  );
}

export default HeroSection;