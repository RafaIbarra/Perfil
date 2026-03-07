import React from 'react';
import './experiencia.css';

// Componentes reutilizables (se mantienen igual)
const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

const Badge = ({ children, variant = 'default' }) => (
  <span className={`badge badge-${variant}`}>{children}</span>
);

// Iconos SVG (se mantienen igual)
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
      title: "Desarrollador Full Stack & Analista de Bases de Datos",
      company: "Cooperativa Capiatá Ltda.",
      location: "Capiatá, Dpto Central",
      period: "2014 - Presente",
      description: "Lidero el desarrollo y modernización de sistemas críticos para una cooperativa con +300 usuarios concurrentes, combinando lógica de negocio en SQL Server con tecnologías modernas.",
      responsibilities: [
        "Diseño y optimización de bases de datos relacionales",
        "Migración de sistemas legacy a arquitecturas modernas (DRF + React)",
        "Configuración de entornos de despliegue (Ubuntu + Nginx)",
        "Integración con APIs de terceros (VISA/CABAL)"
      ],
      technologies: ["SQL Server", "Django REST Framework", "React", "Node.js", "Nginx", "Ubuntu", "APIs REST", "Stored Procedures"],
      achievements: [
        "Participé en el proceso de migración de bases de datos desde MySQL a SQL Server, colaborando en la adaptación de estructuras y datos",
        "Diseño y desarrollo de un sistema de compras integrado a los procesos de tesorería para la gestión de pagos a proveedores y su integración con los procesos contables, incluyendo control de inventario de los artículos adquiridos",
        "Desarrollo del sistema de débito de ahorro(Socios) para pagos y transferencias utilizado por empresas externas como DIMO, procesando 5,000+ transacciones mensuales",
        "Diseño y desarrollo de un sistema de digitalización de documentos para solicitudes de crédito, permitiendo la gestión electrónica de expedientes y reduciendo costos operativos asociados a documentación física",
        "Implementación de sistema de scoring para evaluación crediticia, mejorando el análisis de riesgo mediante patrones de pago, actividad económica y movimientos de ahorro",
        "Migración de facturación pre-impresa a sistema auto-generado, eliminando costos de compra de formularios físicos y reimpresiones",
        "Configuración e implementación de servidor local para intranet corporativa con notificaciones en tiempo real, manteniendo integración con BD de producción",
        "Diseño y desarrollo de sistema integral de venta de electrodomésticos con integración a módulos de crédito (financiación) y caja (contado)"
      ],
    },
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          {/* <p className="section-description">
            Mi trayectoria combinando sistemas legacy con tecnologías modernas
          </p> */}
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
                
                {exp.responsibilities && (
                  <div className="responsibilities-section">
                    <h4 className="subsection-title">Mis responsabilidades incluyen:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="achievement-item">
                          <div className="achievement-bullet"></div>
                          <span className="achievement-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="technologies-section">
                  <h4 className="subsection-title">Tecnologías clave:</h4>
                  <div className="technologies-list">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="achievements-section">
                  <h4 className="subsection-title">Logros destacados:</h4>
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