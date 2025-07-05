// Skills.js
import React from 'react';
import { FaFileCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { DiCodeBadge } from "react-icons/di";
import { AiFillDatabase } from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";



import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

import './skills_css.css';

// Importar iconos de lucide-react
import { Code, Server, Smartphone, Database } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: 'FaLaptopCode',
      skills: [
        { 'name': 'JavaScript','categoria':'Lenguajes','logoKey': 'javascript','wordmark':false },
        { 'name': 'TypeScript','categoria':'Lenguajes','logoKey': 'typescript','wordmark':false },
        { 'name': 'Python','categoria':'Lenguajes','logoKey': 'python','wordmark':false },
      ],
      color: "blue",
    },
    {
      title: "Backend",
      icon: "AiFillDatabase",
      skills: [
        { 'name': 'Django','categoria':'Backend','logoKey': 'django','wordmark':true },
        { 'name': 'Django REST Framework ','categoria':'Backend','logoKey': 'djangorest','wordmark':false },
        { 'name': 'FastAPI','categoria':'Backend','logoKey': 'fastapi','wordmark':false },
        { 'name': 'Express','categoria':'Backend','logoKey': 'express','wordmark':true },
        { 'name': 'Node.js','categoria':'Backend','logoKey': 'nodejs','wordmark':true },
      ],
      color: "green",
    },
    {
      title: "Base Datos",
      icon: 'FaDatabase',
      skills: [
        { 'name': 'SQL Server','categoria':'Base Datos','logoKey': 'microsoftsqlserver','wordmark':true },
        { 'name': 'MySQL','categoria':'Base Datos','logoKey': 'mysql','wordmark':false },
        { 'name': 'PostgreSQL','categoria':'Base Datos','logoKey': 'postgresql','wordmark':false },
      ],
      color: "purple",
    },
    {
      title: "Frontend-Movile",
      icon: 'FaFileCode',
      skills: [
        { 'name': 'React','categoria':'Frontend-Movile','logoKey': 'react','wordmark':true },
      { 'name': 'React-Native','categoria':'Frontend-Movile','logoKey': 'react','wordmark':false },
      ],
      color: "orange",
    },
  ];
  const IconMap = {
        ...FaIcons,
        ...DiIcons,
        ...AiIcons,
        ...MdIcons
      };
  const traer_img = (valor,wordmark)=>{
      if(valor==='django'){
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-plain-wordmark.svg`
               
      }else{

        if(wordmark){
          return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original-wordmark.svg`
        }else{
  
          return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${valor}/${valor}-original.svg`
        }
      }
    }

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
              <div className="card-header">
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
                        className="skill-icon"
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
      </div>
    </section>
  );
}

export default Skills