import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const FrameworksGraficos = ({datacantidades}) => {
    const chartRef = useRef(null);
    useEffect(()=>{
      
       const myChart = echarts.init(chartRef.current);

       const formattedData = datacantidades.map(item => ({
        value: item.cantidad,
        name: item.framework
      }));
      

        const option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [
              {
                name: 'Cant. Repositorios',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                  borderRadius: 10
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                // data: [
                //   { value: 1048, name: 'Search Engine' },
                //   { value: 735, name: 'Direct' },
                //   { value: 580, name: 'Email' },
                //   { value: 484, name: 'Union Ads' },
                //   { value: 300, name: 'Video Ads' }
                // ]
                data:formattedData
              }
            ]
        };






        myChart.setOption(option);
        const handleResize = () => {
                myChart.resize();
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }, []);
    return(
        <div 
        ref={chartRef} 
        style={{
            width: '100%',
            height: '600px',
            backgroundColor: 'white' // Cambiado a blanco para mejor visualización
        }}
        />
    )
}
export default FrameworksGraficos