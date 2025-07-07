import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

import Dockerfile from '../../assets/docker.png';
import CSS from '../../assets/css.svg';
import JavaScript from '../../assets/javascript.png';
import Python from '../../assets/pythonv3.png';
import TypeScript from '../../assets/typescript.png';
import Java from '../../assets/java2.png';
import HTML from '../../assets/html.png';
import Shell from '../../assets/Shell.png';
import Others from '../../assets/othersv2.png'; 
import './graficoscss.css'
const LenguajesGraficos = ({ datalenguajes }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      // 🎯 Mapear cada lenguaje con su imagen
      const pathSymbols = {
        JavaScript: `image://${JavaScript}`,
        Python: `image://${Python}`,
        Java: `image://${Java}`,
        TypeScript: `image://${TypeScript}`,
        Dockerfile: `image://${Dockerfile}`,
        HTML: `image://${HTML}`,
        Shell: `image://${Shell}`,
        CSS: `image://${CSS}`,
        Others: `image://${Others}`
      };

      // 🎨 Colores por barra
      const colores = [
        '#e54035', '#5470C6', '#91CC75', '#FAC858',
        '#EE6666', '#73C0DE', '#3BA272', '#FC8452'
      ];

      // 🧠 Eje X con nombres de lenguajes
      const ejeX = datalenguajes.map(item => item.lenguaje);

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'none' },
          formatter: function (params) {
            return params[0].name + ': ' + params[0].value + '%';
          }
        },
        xAxis: {
          data: ejeX,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { color: 'black',fontWeight: 'bold'}
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        series: [
          {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            
            data: datalenguajes.map((item, index) => ({
              value: item.valor,
              itemStyle: { color: colores[index % colores.length],opacity: 0.5 }
            })),
            emphasis: {
              itemStyle: {
                opacity: 1
              }
            },
            z: 10
          },
          {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%'],
            data: datalenguajes.map((item, index) => ({
              value: item.valor,
              symbol: pathSymbols[item.lenguaje] || pathSymbols.Others,
              symbolSize: [50, 50],
              itemStyle: { color: colores[index % colores.length] }
            }))
          }
        ]
      };

      myChart.setOption(option);

      const handleResize = () => myChart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, [datalenguajes]);

  return (
    <div
      ref={chartRef}
      className='grafico-container'
      // style={{
      //   width: '100%',
      //   minHeight: '500px',
      //   backgroundColor: 'white'
      // }}
    />
  );
};

export default LenguajesGraficos;
