import React from 'react';
import './experiencia.css';

// Componente Card personalizado
const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }) => (
  <span className={`badge badge-${variant}`}>
    {children}
  </span>
);

// Iconos SVG simples
const Calendar = ({ className = '' }) => (
  <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MapPin = ({ className = '' }) => (
  <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export function Experiencia() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Cooperativa Capiatá Ltda.",
      location: "Capiatá, Dpto Central",
      period: "2014 - Presente",
      description:
        "Liderazgo técnico en el desarrollo de aplicaciones web y móviles para clientes enterprise. Implementación de arquitecturas escalables y mentoring de desarrolladores junior.",
      technologies: ["React", "Node.js", "DRF", "Nginx", "Nginx"],
      achievements: [
        "Reducción del 40% en tiempo de carga de aplicaciones",
        "Implementación de CI/CD que mejoró la productividad del equipo en 60%",
        "Liderazgo de equipo de 5 desarrolladores",
      ],
    },
   
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-description">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-card">
              <div className="card-accent"></div>

              <CardHeader>
                <div className="card-header-content">
                  <div className="job-info">
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <div className="job-details">
                    <div className="detail-item">
                      <Calendar className="detail-icon" />
                      {exp.period}
                    </div>
                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="job-description">{exp.description}</p>

                <div className="technologies-section">
                  <h4 className="subsection-title">Tecnologías utilizadas:</h4>
                  <div className="technologies-list">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="achievements-section">
                  <h4 className="subsection-title">Logros principales:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        <div className="achievement-bullet"></div>
                        <span className="achievement-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}