import React, { useState, useEffect } from "react";
import PDFCard from "../PDFViewer/PDFCard";
import "./main.css";

const phrases = [
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "React",
  "React-Native",
  "Ubuntu Desktop",
  "APIs REST",
  
];

function About({servidoractivo}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentPhrase = phrases[index];

    if (!reverse && subIndex === currentPhrase.length + 1) {
      setPause(true);
      setTimeout(() => {
        setReverse(true);
        setPause(false);
      }, 3000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause]);
  
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="flex-text">
            <h1 className="about-title">
              Hola, soy{" "}
              <span className="gradient-text">Rafael Ibarra</span>
            </h1>
            
      
            <p className="subtitle">Desarrollador Full-Stack & Especialista en Bases de Datos</p>

            <span className="herramientas-text">
              {phrases[index].substring(0, subIndex)}
              <span className="blinking-cursor">|</span>
            </span>

            <p className="text-block-about">
              Como desarrollador con más de una década en el sector financiero cooperativo, me apasiona integrar tecnologías actuales con las plataformas existentes,
              optimizando procesos y creando soluciones que perduren. Mi enfoque va más allá del código: busco entender las necesidades reales del negocio para aportar verdadero valor.
            </p>

            <p className="text-block-about" >
            Fuera del ámbito laboral, materializo ideas a través de proyectos full-stack que desarrollo y despliego en mi propio servidor, 
            donde experimento con arquitecturas escalables y soluciones innovadoras.
            </p>

            <div className="skills-list">
              <ul>
                <li><strong>Arquitectura de datos</strong>: Desde stored procedures hasta modelos relacionales complejos</li>
                <li><strong>Backend robusto</strong>:  APIs que preservan la lógica empresarial y crecen con las necesidades</li>
                <li><strong>Interfaces intuitivas</strong>: Interfaces que simplifican procesos complejos</li>
              </ul>
            </div>

            
        </div>

        <div className="flex-section">
          <div style={{ position: 'relative' }}>
            <div>
              <img
                src="/profile.png"
                alt="Rafael Ibarra"
                width="400"
                height="400"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        
      </div>
      <div className="button-group">
        <PDFCard servidoractivo={servidoractivo} />
      </div>
    </div>
  );
}

export default About;