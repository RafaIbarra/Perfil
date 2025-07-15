import React,{useState,useEffect} from "react";
import { ExternalLink, Github, Database, Globe, Smartphone } from 'lucide-react';
import './proyectov3.css'
function Proyecto({itemdata}){
    const [loading] = useState(false);
    const [databackend, setDatabackend] = useState({});
    const [datafronted, setDatafronted] = useState({});
    const [datamovil, setDatamovil] = useState({});
    const [datatags, setDatatags] = useState([]);
    const [activeTab, setActiveTab] = useState('backend')
    useEffect(() => {
        const cargadatos = async () => {
            
            setDatatags((itemdata['detalle_tags']) || [])
            setDatabackend(itemdata['detalle_backend'][0] || {});
            setDatafronted(itemdata['detalle_frontend'][0] || {});
            setDatamovil(itemdata['detalle_movil'][0] || {});
            };
        cargadatos();
    }, [itemdata]);

    const ComponentBackend = () => {
    return (
      <div className="description-container">
        <div className="description-item">
          <span className="description-label">Repositorio:</span>
          <a 
            href={databackend.Repositorio}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {databackend.Repositorio}
          </a>
        </div>
        
        <div className="description-item">
          <span className="description-label">Framework:</span>
          <span className="description-value">{databackend.Framework} - {databackend.Lenguaje}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Alojamiento:</span>
          <span className="description-value">{databackend.Alojamiento}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">SO:</span>
          <span className="description-value">{databackend.SO}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Base Datos:</span>
          <span className="description-value">{databackend.BaseDatos}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Servidor Web:</span>
          <span className="description-value">{databackend.ServidorWeb}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">URLs:</span>
          <a 
            href={databackend.Urls}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {databackend.Urls}
          </a>
        </div>
      </div>
    );
    };


    const ComponentFronted = () => {
    return (
      <div className="description-container">
        <div className="description-item">
          <span className="description-label">Repositorio:</span>
          <a 
            href={datafronted.Repositorio}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {datafronted.Repositorio}
          </a>
        </div>
        
        <div className="description-item">
          <span className="description-label">Framework:</span>
          <span className="description-value">{datafronted.Framework}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Lenguaje:</span>
          <span className="description-value">{datafronted.Lenguaje}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Alojamiento:</span>
          <span className="description-value">{datafronted.Alojamiento}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">URLs:</span>
          <a 
            href={datafronted.Urls}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {datafronted.Urls}
          </a>
        </div>
      </div>
    );
    };

    const ComponentMovil = () => {
    return (
      <div className="description-container">
        <div className="description-item">
          <span className="description-label">Repositorio:</span>
          <a 
            href={datamovil.Repositorio}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {datamovil.Repositorio}
          </a>
        </div>
        
        <div className="description-item">
          <span className="description-label">Framework:</span>
          <span className="description-value">{datamovil.Framework}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Lenguaje:</span>
          <span className="description-value">{datamovil.Lenguaje}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Versión Android:</span>
          <span className="description-value">{datamovil.VersionAndroid}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Versión iOS:</span>
          <span className="description-value">{datamovil.VersioniOS}</span>
        </div>
        
        <div className="description-item">
          <span className="description-label">Enlace Descarga:</span>
          <a 
            href={datamovil.EnlaceDescarga}
            target="_blank" 
            rel="noopener noreferrer"
            className="description-link"
          >
            {datamovil.EnlaceDescarga}
          </a>
        </div>
      </div>
    );
    };

    const renderTabContent = () => {
        switch (activeTab) {
        case 'backend':
            return <ComponentBackend />;
        case 'frontend':
            return <ComponentFronted />;
        case 'movil':
            return <ComponentMovil />;
        default:
            return <ComponentBackend />;
            }
    };

    const getAvailableTabs = () => {
        const tabs = [];
        
        if (databackend.Framework) {
        tabs.push({ key: 'backend', label: 'Backend', icon: Database });
        }
        
        if (datafronted.Framework) {
        tabs.push({ key: 'frontend', label: 'Web', icon: Globe });
        }
        
        if (datamovil.Framework) {
        tabs.push({ key: 'movil', label: 'Móvil', icon: Smartphone });
        }
        
        return tabs;
    };

   const availableTabs = getAvailableTabs();

    return(
        <div className={`project-card ${loading ? 'loading' : ''}`}>
            <div className="project-header">
                <img
                src={itemdata.Logo || "/placeholder.svg"}
                alt={itemdata.Sistema}
                className="project-avatar"
                />
                <div className="project-info">
                    <h3 className="project-title">{itemdata.Sistema}</h3>
                    <p className="project-description">{itemdata.Descripcion}</p>
                    
                </div>
                
            </div>
            <div className="tags-container">
                        {datatags.map((tag)=>{
                            return(
                                <span key={tag.Tag} className="tag-item">
                                    {tag.Tag}
                                </span>
                            )
                        }

                        )}
                    </div>
            
            <div className="project-content">
                <div className="tab-buttons">
                    {availableTabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                        >
                            <IconComponent className="tab-icon" />
                            {tab.label}
                        </button>
                        );
                    })}
                </div>

                <div className="tab-content">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    )
}

export default Proyecto

