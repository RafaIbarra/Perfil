import { useEffect, useRef } from 'react';
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

const LenguajesGraficos = ({ datalenguajes }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !datalenguajes || datalenguajes.length === 0) return;

    const myChart = echarts.init(chartRef.current, 'dark');

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

    const gradientColors = [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#38bdf8' },
        { offset: 1, color: '#0284c7' }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#a855f7' },
        { offset: 1, color: '#7e22ce' }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#34d399' },
        { offset: 1, color: '#059669' }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#fbbf24' },
        { offset: 1, color: '#d97706' }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#f43f5e' },
        { offset: 1, color: '#be123c' }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#818cf8' },
        { offset: 1, color: '#4338ca' }
      ])
    ];

    const ejeX = datalenguajes.map(item => item.lenguaje);

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        borderColor: 'rgba(168, 85, 247, 0.3)',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: '#f8fafc',
          fontSize: 13
        },
        formatter: function (params) {
          const item = params[0];
          return `
            <div style="font-weight: 600; margin-bottom: 4px; color: #a855f7;">${item.name}</div>
            <div style="display: flex; justify-content: space-between; gap: 16px;">
              <span style="color: #94a3b8;">Presencia en código:</span>
              <strong style="color: #38bdf8;">${item.value}%</strong>
            </div>
          `;
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '8%',
        top: '24%',
        containLabel: true
      },
      xAxis: {
        data: ejeX,
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        axisLabel: {
          color: '#94a3b8',
          fontWeight: 600,
          fontSize: 11,
          interval: 0,
          rotate: window.innerWidth < 640 ? 30 : 0
        }
      },
      yAxis: {
        max: (value) => Math.ceil(value.max * 1.3),
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.05)',
            type: 'dashed'
          }
        },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: '#64748b',
          fontSize: 11,
          formatter: '{value}%'
        }
      },
      series: [
        {
          name: 'Porcentaje',
          type: 'bar',
          barWidth: '38%',
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
            color: (params) => gradientColors[params.dataIndex % gradientColors.length]
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: 'rgba(56, 189, 248, 0.5)'
            }
          },
          data: datalenguajes.map(item => item.valor),
          label: {
            show: false
          },
          z: 10
        },
        {
          name: 'Iconos',
          type: 'pictorialBar',
          barGap: '-100%',
          symbolPosition: 'end',
          symbolSize: [32, 32],
          symbolOffset: [0, '-120%'],
          data: datalenguajes.map((item) => ({
            value: item.valor,
            symbol: pathSymbols[item.lenguaje] || pathSymbols.Others
          })),
          tooltip: { show: false },
          z: 5
        }
      ]
    };

    myChart.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      myChart.resize();
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      myChart.dispose();
    };
  }, [datalenguajes]);

  return (
    <div className="w-full h-[320px] flex items-center justify-center">
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default LenguajesGraficos;
