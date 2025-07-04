import React,{useEffect,useState} from 'react';
import { Button,Descriptions, Row, Col,Divider,FloatButton,Typography } from 'antd';
import {UserOutlined,CodeOutlined,MailOutlined} from '@ant-design/icons';
import './principal.css'
import Generarpeticion from '../Peticiones/apipeticiones';
import FrameworksGraficos from './Graficos/FrameworksGraficos';
import LenguajesGraficos from './Graficos/LenguajesGraficos';
import About from './About/About';
import Proyecto from './Proyecto/Proyecto';
const { Text, Link } = Typography;
const Principal = () => {
  const [loading,setLoading]=useState(false)
  const [datacantidades,setDatacantidades]=useState([])
  const [datalenguajes,setDatalenguajes]=useState([])
  const [dataproyectos,setDataproyectos]=useState([])
  const [scrolled, setScrolled] = useState(false);
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
  useEffect(() => {
    
    const handleScroll = () => {
      
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="portfolio-container">
      
      <div className="nav-buttons" 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          padding: '20px 0',
          // background: '#fff',
          position: 'sticky',
          top: 0,
          height:'80px',
          zIndex: 100,
          borderBottom: scrolled ? '2px solid #f0f0f0' : 'none',
          boxSizing: 'border-box',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        

            <div style={{ marginLeft: '10px'}}>
              {/* <Text type="secondary" 
              style={{ 
                  fontSize: '30px',
                  background: 'linear-gradient(90deg,rgb(15, 30, 236), #8a2be2)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >Rafael Ibarra</Text> */}
              <span className="name-text" onClick={() => scrollToSection('about')}>
                  Rafael Ibarra            
              </span>


            </div>
            <div style={{ 
                display: 'flex', 
                gap: '8px',
                marginLeft: 'auto' 
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
        </div>
        
      {
        loading ? (<span> cargango </span>):
        (
          <>
            <section id="about" 
            // style={{backgroundColor:'red',minHeight:'100vh'}}
            className="section-bg" 
            // style={{ minHeight: '100vh', padding: '40px' }}
            // style={{maxWidth:'100%',minHeight:'300px',backgroundColor:'red'}}
            >
              
                <About/>
            </section>


            <section id="experience" className="section" 
            style={{ minHeight: '100vh', padding: '40px' }}
            >
              
            </section>

            <section id="works"  className="section-muted"
            >
              <div  className="main-container-section">
                <div className="text-center-block">
                  <h2 className="titulo-section">Proyectos Destacados</h2>
                  <p className="text-block">
                    Una selección de mis trabajos más recientes y significativos
                  </p>
                </div>
                
                

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
                
                
              </div>
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
              </div>
            </section>
             <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
                <FloatButton.BackTop visibilityHeight={500} />
             </FloatButton.Group>
          </>
        )
      }
      
      

     


    </div>
  );
};


export default Principal;