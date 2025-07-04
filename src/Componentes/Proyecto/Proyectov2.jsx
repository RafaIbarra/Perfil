import React,{useState,useEffect} from 'react';
import { Typography,Avatar, Card,Col,Row, Descriptions } from 'antd';
const { Title } = Typography;

const Proyecto = ({itemdata}) => {
    const [loading] = useState(false);
    const [databackend,setDatabackend]=useState([])
    const [datafronted,setDatafronted]=useState([])
    const [datamovil,setDatamovil]=useState([])

    useEffect(()=>{ 
        const cargadatos= async()=>{
          
          setDatabackend(itemdata['detalle_backend'][0])
          setDatafronted(itemdata['detalle_frontend'][0])
          setDatamovil(itemdata['detalle_movil'][0])
          
        }
        cargadatos()
      }, []);
    const ComponentBackend=()=>{
        return(
          <Card title="Backend" variant="borderless">

            <Descriptions column={1}  size="small">
                
                <Descriptions.Item label="Repositorio">
                                      <a 
                                        href={databackend.Repositorio}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {databackend.Repositorio}
                                      </a>
                                    </Descriptions.Item>

                <Descriptions.Item label="Framework">{databackend.Framework} - {databackend.Lenguaje}</Descriptions.Item>
                <Descriptions.Item label="Alojamiento">{databackend.Alojamiento}</Descriptions.Item>
                <Descriptions.Item label="SO">{databackend.SO}</Descriptions.Item>
                <Descriptions.Item label="Base Datos">{databackend.BaseDatos}</Descriptions.Item>
                <Descriptions.Item label="Servidor Web">{databackend.ServidorWeb}</Descriptions.Item>
                <Descriptions.Item label="Urls">
                                      <a 
                                        href={databackend.Urls}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {databackend.Urls}
                                      </a>
                                    </Descriptions.Item>
                
                
            </Descriptions>
          </Card>
        )
      }
    const Componentfronted=()=>{
        return(
            <Descriptions column={1}  size="small">
                
                <Descriptions.Item label="Repositorio">
                                      <a 
                                        href={datafronted.Repositorio}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {datafronted.Repositorio}
                                      </a>
                                    </Descriptions.Item>

                <Descriptions.Item label="Framework">{datafronted.Framework}</Descriptions.Item>
                <Descriptions.Item label="Lenguaje">{datafronted.Lenguaje}</Descriptions.Item>
                <Descriptions.Item label="Alojamiento">{datafronted.Alojamiento}</Descriptions.Item>
                <Descriptions.Item label="Urls">
                                      <a 
                                        href={datafronted.Urls}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {datafronted.Urls}
                                      </a>
                                    </Descriptions.Item>
                
                
            </Descriptions>
        )
      }
    const ComponentMovil=()=>{
        return(
            <Descriptions column={1}  size="small">
                
                <Descriptions.Item label="Repositorio">
                                      <a 
                                        href={datamovil.Repositorio}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {datamovil.Repositorio}
                                      </a>
                                    </Descriptions.Item>

                <Descriptions.Item label="Framework">{datamovil.Framework}</Descriptions.Item>
                <Descriptions.Item label="Lenguaje">{datamovil.Lenguaje}</Descriptions.Item>
                <Descriptions.Item label="Version Android">{datamovil.VersionAndroid}</Descriptions.Item>
                <Descriptions.Item label="Version iOS">{datamovil.VersioniOS}</Descriptions.Item>
                <Descriptions.Item label="Enlace Descarga">
                                      <a 
                                        href={datamovil.EnlaceDescarga}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                       {datamovil.EnlaceDescarga}
                                      </a>
                                    </Descriptions.Item>
                
                
            </Descriptions>
        )
      }
    return(
        <Card size="small" loading={loading}
          // style={{ width: 300 }}
          style={{
            width: '100%',
            height: 400,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff', // blanco o un gris claro
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // sombra suave y difusa
            borderRadius: '10px', // bordes redondeados
            padding: '16px', // espacio interno
          }}
          >
          <Card.Meta
            
            avatar={<Avatar src={itemdata.Logo} />}
            
            title={itemdata.Sistema}
            description={
              <>
                <p>{itemdata.Descripcion}</p>
                <Row gutter={16}>
                  <Col span={8}>
                    <ComponentBackend/>
                  </Col>
                  <Col span={8}>
                    <Card title="Card title" variant="borderless">
                      Card content
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Card title" variant="borderless">
                      Card content
                    </Card>
                  </Col>
                 </Row>
               
                  
              </>
            
            }
          />
        </Card>
    )
}
export default Proyecto