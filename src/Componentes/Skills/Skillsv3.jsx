// Skills.js
import React from 'react';
import { Descriptions,Divider} from 'antd';
import { FaFileCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { DiCodeBadge } from "react-icons/di";
import { AiFillDatabase } from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { FaCloudflare } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import FrameworksGraficos from '../Graficos/FrameworksGraficos';
import LenguajesGraficos from '../Graficos/LenguajesGraficos';

import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

import './skills_css.css';

// Importar iconos de lucide-react


function Skills({datacantidades,datalenguajes}) {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: 'FaLaptopCode',
      skills: [
        { 'name': 'JavaScript','logoKey': 'javascript','wordmark':false },
        { 'name': 'TypeScript','logoKey': 'typescript','wordmark':false },
        { 'name': 'Python','logoKey': 'python','wordmark':false },
      ],
      color: "blue",
    },
    {
      title: "Backend",
      icon: "AiFillDatabase",
      skills: [
        { 'name': 'Django','logoKey': 'django','wordmark':true },
        { 'name': 'Django REST Framework ','logoKey': 'djangorest','wordmark':false },
        { 'name': 'FastAPI','logoKey': 'fastapi','wordmark':false },
        { 'name': 'Express','logoKey': 'express','wordmark':true },
        { 'name': 'Node.js','logoKey': 'nodejs','wordmark':true },
      ],
      color: "green",
    },
    {
      title: "Base Datos",
      icon: 'FaDatabase',
      skills: [
        { 'name': 'SQL Server','logoKey': 'microsoftsqlserver','wordmark':false },
        { 'name': 'MySQL','logoKey': 'mysql','wordmark':false },
        { 'name': 'PostgreSQL','logoKey': 'postgresql','wordmark':false },
      ],
      color: "purple",
    },
    {
      title: "Frontend-Movile",
      icon: 'FaFileCode',
      skills: [
        { 'name': 'React','logoKey': 'react','wordmark':true },
        { 'name': 'React-Native','logoKey': 'react','wordmark':false },
        { 'name': 'Expo-GO','logoKey': 'expo','wordmark':false },
      ],
      color: "orange",
    },
    {
      title: "Infraestructura",
      icon: 'FaDev',
      skills: [
        { 'name': 'Git','logoKey': 'git','wordmark':true },
        { 'name': 'Nginx','logoKey': 'nginx','wordmark':false },
        { 'name': 'Ubuntu','logoKey': 'ubuntu','wordmark':true },
        { 'name': 'Cloudflare','logoKey': 'cloudflare','wordmark':true },
      ],
      color: "black",
    },
    {
      title: "Data",
      icon: 'MdOutlineScience',
      skills: [
        { 'name': 'Pandas','logoKey': 'pandas','wordmark':true },
        { 'name': 'Matplotlib','logoKey': 'matplotlib','wordmark':false },
      ],
      color: "yellow",
    },
    {
      title: "Despliegue",
      icon: 'GrDeploy',
      skills: [
        { 'name': 'Vercel','logoKey': 'vercel','wordmark':false },
        { 'name': 'Render','logoKey': 'render','wordmark':false },
      ],
      color: "despliegue",
    },
  ];
  const IconMap = {
        ...FaIcons,
        ...DiIcons,
        ...AiIcons,
        ...MdIcons,
        ...GrIcons


      };

const traer_img = (valor, wordmark) => {
  // Casos especiales que usan imágenes locales en /public
  const imagenesLocales = ['expo', 'render']; // Lista de valores especiales
  if (imagenesLocales.includes(valor)) {
    return `/${valor}.png`; // Ruta directa a la carpeta public
  }

  // Lógica original para Devicon
  if (valor === 'django') {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-plain-wordmark.svg`;
  } else {
    if (wordmark) {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original-wordmark.svg`;
    } else {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original.svg`;
    }
  }
};
  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">
        <div className="skills-section-header">
          <h2 className="skills-section-title">Habilidades Técnicas</h2>
          <p className="skills-section-description">
            Dominio de tecnologías modernas para desarrollo completo de aplicaciones
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) =>{
            const IconComponent = IconMap[category.icon];
            return (
            
            <div key={index} className={`skill-card ${category.color}`}>
            
              <div className={`card-gradient gradient-${category.color}`}></div>
              
              <div className="card-header-skills">
                <div className={`icon-container bg-${category.color}`}>
                    <IconComponent className="card-icon" />
                    <h3 className="card-title">{category.title}</h3>
                </div>
              </div>
              



              <div className="card-content">
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge">
                      <img 
                        // src={skill.icon} 
                        src={traer_img(skill.logoKey,skill.wordmark)}
                        alt={skill.name} 
                        // className="skill-icon"
                        className={skill.logoKey === 'expo' || skill.logoKey === 'render' ? 'skill-icon-png' : 'skill-icon'}
                      />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
          } 
          
        )
          
          }
        </div>
        <Divider style={{ borderTop: '2px solid rgba(214, 211, 211, 0.62)' }} />
        <div className='contenedor-estadisticas'> 
            <p className="estadisticas-title">Estadisticas de repositorio</p>
            <div className='contenedor-datos'>

                <div className='contedor-direcciones'>
                    <span className='label'>Repositorio:</span>
                    <a 
                      href="https://github.com/RafaIbarra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                        https://github.com/RafaIbarra
                    </a>
                </div>
                <div className='contedor-direcciones'>
                  <span className='label'>Otras Estadísticas:</span>
                  <a 
                      href="https://profile-summary-for-github.com/user/RafaIbarra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                        https://profile-summary-for-github.com/user/RafaIbarra
                  </a>
                </div>
            </div>
            <div className='contenedor-graficos'>
                <div style={{ flex: 4,justifyItems:'center'}}>
                  <Descriptions style={{justifyItems:'center',fontStyle:'italic',textDecoration:'underline'}} title="FRAMEWORKS"/>
                  <FrameworksGraficos datacantidades={datacantidades} />
                </div>
                <div style={{ flex: 6,justifyItems:'center'}}>
                  
                  <Descriptions  style={{justifyItems:'center',fontStyle:'italic',textDecoration:'underline'}}  title="LENGUAJES"/>
                  <LenguajesGraficos datalenguajes={datalenguajes} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills