import React,{useState,useEffect} from "react";
import { Button,Descriptions, Row, Col,Divider,FloatButton,Typography,Card } from 'antd';
import LenguajesGraficos from "../Graficos/LenguajesGraficos";
import FrameworksGraficos from "../Graficos/FrameworksGraficos";
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

function Skills({datacantidades,datalenguajes}){
   const [cargado,setcargado]=useState(false)
    const Categorias=[

      { 'name': 'Lenguajes',  'icon': 'FaLaptopCode' },
      { 'name': 'Base Datos',  'icon': 'FaDatabase' },
      { 'name': 'Backend',  'icon': 'AiFillDatabase' },
      { 'name': 'Frontend-Movile','icon': 'FaFileCode' },
      { 'name': 'Data',  'icon': 'MdOutlineScience' },
      { 'name': 'Infraestructura',  'icon': 'FaDev' },

    ]
    const IconMap = {
      ...FaIcons,
      ...DiIcons,
      ...AiIcons,
      ...MdIcons
    };

    const tech=[
      { 'name': 'React','categoria':'Frontend-Movile','logoKey': 'react','wordmark':true },
      { 'name': 'React-Native','categoria':'Frontend-Movile','logoKey': 'react','wordmark':false },

      { 'name': 'SQL Server','categoria':'Base Datos','logoKey': 'microsoftsqlserver','wordmark':true },
      { 'name': 'MySQL','categoria':'Base Datos','logoKey': 'mysql','wordmark':false },
      { 'name': 'PostgreSQL','categoria':'Base Datos','logoKey': 'postgresql','wordmark':false },

      { 'name': 'JavaScript','categoria':'Lenguajes','logoKey': 'javascript','wordmark':false },
      { 'name': 'TypeScript','categoria':'Lenguajes','logoKey': 'typescript','wordmark':false },
      { 'name': 'Python','categoria':'Lenguajes','logoKey': 'python','wordmark':false },


      { 'name': 'Django','categoria':'Backend','logoKey': 'django','wordmark':true },
      { 'name': 'Django REST Framework ','categoria':'Backend','logoKey': 'djangorest','wordmark':false },
      { 'name': 'FastAPI','categoria':'Backend','logoKey': 'fastapi','wordmark':false },
      { 'name': 'Express','categoria':'Backend','logoKey': 'express','wordmark':true },
      { 'name': 'Node.js','categoria':'Backend','logoKey': 'nodejs','wordmark':true },

      { 'name': 'Pandas','categoria':'Data','logoKey': 'pandas','wordmark':true },

      { 'name': 'Git','categoria':'Infraestructura','logoKey': 'git','wordmark':true },
      { 'name': 'Nginx','categoria':'Infraestructura','logoKey': 'nginx','wordmark':false },
      { 'name': 'Ubuntu','categoria':'Infraestructura','logoKey': 'ubuntu','wordmark':true },

    ]
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
      // return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
      // setcargado(false)

    }
    
    return(
        <div style={{marginLeft:'1rem'}}>



                  {/* {Categorias.map((categoria) => {
                  const IconComponent = IconMap[categoria.icon];
                  const techsDeCategoria = tech.filter(
                    (t) => t.categoria === categoria.name
                  );

                  return (
                    <div key={categoria.name} style={{ marginBottom: "5rem",backgroundColor:'red',maxWidth:'700px' }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}> 
                          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                            {IconComponent && <IconComponent />}{" "}
                            
                          </span>
                          <p>{categoria.name}</p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        {techsDeCategoria.map((t) => (
                          <div style={{borderWidth:'1px',borderStyle:'solid',padding:'10px',borderRadius:'5px'}}> 
                            <span key={t.name} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                              <img
                                src={traer_img(t.logoKey,t.wordmark)}
                                alt={t.name}
                                width={30}
                                height={30}
                                style={{ verticalAlign: "middle" }}
                              />
                              {t.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })} */}

                {Categorias.map((categoria) => {
                  const IconComponent = IconMap[categoria.icon];
                  const techsDeCategoria = tech.filter(
                    (t) => t.categoria === categoria.name
                  );

                  return (
                    <Card 
                    key={categoria.name} 
                    size="small"
                    style={{
                      maxWidth: 500,
                      height: 200,
                      overflowY: 'auto',
                      
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: '#ffffff',
                      padding: '16px'
                    }}
                    >
                      <Card.Meta
                       avatar={IconComponent && <IconComponent />}
                       title={categoria.name}
                       description={
                        <>
                          <div   style={{ display: "flex", alignItems: "center", gap: "20px",width: "100%", overflowX: "auto", }}>
                          {techsDeCategoria.map((t) => (
                          <div key={`d_'${t.name}`} style={{borderWidth:'1px',borderStyle:'solid',padding:'10px',borderRadius:'5px'}}> 
                            <span key={t.name} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                              <img
                                src={traer_img(t.logoKey,t.wordmark)}
                                alt={t.name}
                                width={30}
                                height={30}
                                style={{ verticalAlign: "middle" }}
                              />
                              {t.name}
                            </span>
                          </div>
                        ))}
                      </div>
                        </>
                      }
                      >
                        
                      </Card.Meta>
                    </Card>
                  );
                })}
          
          
          {/* <img 
          src={traer_img('ubuntu')}
          /> */}
          
          
             {/* <div  className="main-container-section">
                            <div className="text-center-block">
                              <h2 className="titulo-section">Habilidades Técnicas</h2>
                              <p className="text-block">
                                 Dominio de tecnologías modernas para desarrollo completo de aplicaciones
                              </p>
                            </div>
                              
                          </div>
            <Descriptions title="Datos repositorio">     
                        <Descriptions.Item label="Perfil">
                          <a 
                            href="https://github.com/RafaIbarra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            https://github.com/RafaIbarra
                          </a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Otras Estadisticas:">
                          <a 
                            href="https://profile-summary-for-github.com/user/RafaIbarra" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            https://profile-summary-for-github.com/user/RafaIbarra
                          </a>
                        </Descriptions.Item>
                  </Descriptions>
                  <div style={{ marginTop:'20px',display: 'flex', flexDirection: 'row', gap: '20px' }}>
                      <div style={{height:'300px', flex: 3,justifyItems:'center'}}>
                        <Descriptions style={{justifyItems:'center',fontStyle:'italic',textDecoration:'underline'}} title="FRAMEWORKS"/>
                        <FrameworksGraficos datacantidades={datacantidades} />
                      </div>
                      <div style={{height:'200px', flex: 7,justifyItems:'center'}}>
                        
                        <Descriptions  style={{justifyItems:'center',fontStyle:'italic',textDecoration:'underline'}}  title="LENGUAJES"/>
                        <LenguajesGraficos datalenguajes={datalenguajes} />
                      </div>
                  </div> */}

        </div>
    )
}

export default Skills

