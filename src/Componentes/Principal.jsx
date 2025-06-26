import React from 'react';
import { Button } from 'antd';
import {
  UserOutlined,
  
  CodeOutlined,
  MailOutlined
} from '@ant-design/icons';
import './principal.css'
import AboutSection from './AboutSection/AboutSection';
import WorksSection from './WorksSection/WorksSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
const Principal = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      
      <div className="nav-buttons" style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Button 
          type="text" 
          icon={<UserOutlined />} 
          onClick={() => scrollToSection('about')}
        >
          Acerca de mí
        </Button>
        <Button 
          type="text" 
          icon={<UserOutlined />} 
          onClick={() => scrollToSection('experience')}
        >
          Experiencia
        </Button>
        <Button 
          type="text" 
          icon={<CodeOutlined />} 
          onClick={() => scrollToSection('works')}
        >
          Trabajos
        </Button>
        <Button 
          type="text" 
          icon={<MailOutlined />} 
          onClick={() => scrollToSection('contact')}
        >
          Contacto
        </Button>
      </div>

      
      <section id="about" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
        <AboutSection />
      </section>
      <section id="experience" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
        <ExperienceSection />
      </section>
      <section id="works" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
        <WorksSection />
      </section>

      {/* 
      
      
      <section id="contact" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
        <ContactSection />
      </section> */}


    </div>
  );
};

// Componentes de cada sección (igual que en la opción anterior)
// ...

export default Principal;