import React,{useEffect,useState} from 'react';
import { Button,FloatButton } from 'antd';
import {MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaCodePullRequest,FaUserShield } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import { FaBriefcase } from 'react-icons/fa';

import './principal.css'
import Generarpeticion from '../Peticiones/apipeticiones';

import Skills from './Skills/Skillsv3';
import About from './About/About2';
import { Experiencia } from './Experiencia/Experiencia';
import ProytectoHome from './Proyecto/ProytectoHome';
import { Contact } from './ContactSection/ContactSection';
const Principal = () => {
  const [loading,setLoading]=useState(false)
  const [datacantidades,setDatacantidades]=useState([])
  const [datalenguajes,setDatalenguajes]=useState([])
  const [dataproyectos,setDataproyectos]=useState([])
  const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
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
        
        const filteredData = result.data.porcentajes.filter(item => item.valor > 1.0);
        
        setDatalenguajes(filteredData)
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
      
      
      <div className={`nav-buttons ${scrolled ? 'scrolled' : ''}`}
       
  
      >
        

            <div style={{ marginLeft: '10px'}}>
             
               <span className="name-text" onClick={() => {
                  scrollToSection('about');
                  setMenuOpen(false);
                }}>
                  Rafael Ibarra            
                </span>


            </div>


             <button 
              className="hamburger-btn" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>



             <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <Button 
                type="text" 
                icon={<FaUserShield  size={18}/>} 
                onClick={() => {
                  scrollToSection('about');
                  setMenuOpen(false);
                }}
              >
                Acerca de mí
              </Button>

              <Button 
                type="text" 
                icon={<FaBriefcase size={18}/>} 
                onClick={() => {
                  scrollToSection('experiencia');
                  setMenuOpen(false);
                }}
              >
                Experiencia 
              </Button>

              <Button 
                type="text" 
                icon={<FaCodePullRequest size={18}/>} 
                onClick={() => {
                  scrollToSection('works');
                  setMenuOpen(false);
                }}
              >
                Trabajos
              </Button>
              <Button 
                type="text" 
                icon={<LiaLaptopCodeSolid  size={24}/>} 
                onClick={() => {
                  scrollToSection('skills');
                  setMenuOpen(false);
                }}
              >
                Skills
              </Button>
              <Button 
                type="text" 
                icon={<HiOutlineMail size={24}/>} 
                onClick={() => {
                  scrollToSection('contact');
                  setMenuOpen(false);
                }}
              >
                Contacto
              </Button>
            </div>

            


           


      </div>
        
      {
        loading ? (<span> cargango </span>):
        (
          <>
            <section id="about" className="section-bg">
              
                <About/>
            </section>
            <section id="experiencia" className="section-blanca">
             <Experiencia/>
            </section>

            <section id="works"  className="section-muted">

              <ProytectoHome dataproyectos={dataproyectos}/>
              
            </section>


            <section id="skills" className="section-skills">
             <Skills datacantidades={datacantidades} datalenguajes={datalenguajes} />
            </section>

            <section id="contact" className="section-muted">
             <Contact/>
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