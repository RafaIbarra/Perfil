import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "blasrafael1986@gmail.com",
      href: "mailto:blasrafael1986@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+595 994 203 957",
      href: "tel:+595994203957",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Capitá, Paraguay",
      href: "#",
    },
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contacto</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="contact-content">
          {/* Información de contacto */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Información de Contacto</h3>
              <p className="contact-info-description">
                Estoy disponible para nuevos proyectos y oportunidades de colaboración. No dudes en contactarme para
                discutir cómo puedo ayudarte.
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    <info.icon className="icon" />
                  </div>
                  <div className="contact-info-details">
                    <h4 className="contact-info-label">{info.title}</h4>
                    <a href={info.href} className="contact-info-link">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Envíame un mensaje</h3>
            </div>
            <div className="contact-form-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  
                </div>

                <div className="form-group">
                  <input
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tu mensaje"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <Send className="submit-icon" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}