import React,{useState,useEffect} from "react";
import { Row, Col,Divider} from 'antd';
import Proyecto from "./Proyectov3";
import './ProyectoHome.css'

function ProytectoHome({dataproyectos}){
  
    return(
        <div className="main-container-section">
            <div className="text-center-block">
                <h2 className="titulo-section">Proyectos</h2>
                <p className="text-block">
                Una selección de mis proyectos personales
                </p>
            </div>
            <div className="proyectos-grid">
                {dataproyectos.map((item)=>{
                    return(
                         <Proyecto key={item.id} itemdata={item} />
                    )
                }

                )
                }
            </div>
            {/* {(() => {
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
            })()} */}

        </div>
    )
}

export default ProytectoHome

