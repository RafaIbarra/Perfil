import React,{useState,useEffect} from "react";
import { Row, Col,Divider} from 'antd';
import Proyecto from "./Proyecto";
function ProytectoHome({dataproyectos}){
  
    return(
        <div className="main-container-section">
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
    )
}

export default ProytectoHome

