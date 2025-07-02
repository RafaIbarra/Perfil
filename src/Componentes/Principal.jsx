import React,{useEffect,useState} from 'react';
import { Button,Descriptions, Row, Col,Divider} from 'antd';
import {
  UserOutlined,
  
  CodeOutlined,
  MailOutlined
} from '@ant-design/icons';
import './principal.css'
import Generarpeticion from '../Peticiones/apipeticiones';
import FrameworksGraficos from './Graficos/FrameworksGraficos';
import LenguajesGraficos from './Graficos/LenguajesGraficos';
import Proyecto from './Proyecto/Proyecto';
const Principal = () => {
  const [loading,setLoading]=useState(false)
  const [datacantidades,setDatacantidades]=useState([])
  const [datalenguajes,setDatalenguajes]=useState([])
  const [dataproyectos,setDataproyectos]=useState([])
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const listar_datos_repositorios = async()=>{
    const endpoint='ListarFrameworks/'
      const result = await Generarpeticion(endpoint);
      
      if (result.resp===200){
        
        setDatalenguajes(result.data.porcentajes)
        setDatacantidades(result.data.cantidades)
      }
  }
  const listar_datos_proyectos = async()=>{
    const endpoint='ListarProyectos/0/'
      const result = await Generarpeticion(endpoint);
      
      if (result.resp===200){
        
        setDataproyectos(result.data)
        
      }
  }
  useEffect(()=>{ 
    const cargadatos= async()=>{
      setLoading(true)
      await listar_datos_repositorios()
      await listar_datos_proyectos()
      setLoading(false)
    }
    cargadatos()
  }, []);

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
            icon={<CodeOutlined />} 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </Button>
        <Button 
          type="text" 
          icon={<MailOutlined />} 
          onClick={() => scrollToSection('contact')}
        >
          Contacto
        </Button>
      </div>
      {
        loading ? (<span> cargango </span>):
        (
          <>
            <section id="about" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
                {/* <AboutSection datacantidades={datacantidades} /> */}
            </section>
            <section id="experience" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
              {/* <ExperienceSection datalenguajes={datalenguajes} /> */}
            </section>
            <section id="skills" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
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
              </div>
            </section>
            <section id="works" className="section" style={{ minHeight: '100vh', padding: '40px' }}>
              
               {(() => {
                  const chunkedData = [];
                  for (let i = 0; i < dataproyectos.length; i += 2) {
                    chunkedData.push(dataproyectos.slice(i, i + 2));
                  }

                  return chunkedData.map((rowItems, rowIndex) => (
                    <div key={rowIndex}>
                      <Row gutter={[16, 16]}>
                        {rowItems.map((item) => (
                          <Col key={item.id} xs={24} sm={12}>
                            

                              <Proyecto itemdata={item} />
                            
                          </Col>
                        ))}
                      </Row>
                      {rowIndex !== chunkedData.length - 1 && <Divider />}
                    </div>
                  ));
                })()}
            </section>
          </>
        )
      }
      
      

     


    </div>
  );
};

// Componentes de cada sección (igual que en la opción anterior)
// ...

export default Principal;