import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const FrameworksGraficos = ({ datacantidades }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !datacantidades || datacantidades.length === 0) return;

    const myChart = echarts.init(chartRef.current, 'dark');

    const formattedData = datacantidades.map(item => ({
      value: item.cantidad,
      name: item.framework
    }));

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        borderColor: 'rgba(56, 189, 248, 0.3)',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: '#f8fafc',
          fontSize: 13
        },
        formatter: (params) => {
          return `
            <div style="font-weight: 600; margin-bottom: 4px; color: #38bdf8;">${params.name}</div>
            <div style="display: flex; justify-content: space-between; gap: 16px;">
              <span style="color: #94a3b8;">Repositorios:</span>
              <strong style="color: #fff;">${params.value} (${params.percent}%)</strong>
            </div>
          `;
        }
      },
      legend: {
        bottom: '0%',
        left: 'center',
        itemWidth: 12,
        itemHeight: 12,
        icon: 'circle',
        textStyle: {
          color: '#94a3b8',
          fontSize: 12
        }
      },
      color: [
        '#06b6d4', // Cyan
        '#a855f7', // Purple
        '#10b981', // Emerald
        '#3b82f6', // Blue
        '#f59e0b', // Amber
        '#ec4899', // Pink
      ],
      series: [
        {
          name: 'Frameworks',
          type: 'pie',
          radius: ['45%', '72%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#070b14',
            borderWidth: 3
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#38bdf8',
              formatter: '{b}\n{c} repos'
            },
            itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(6, 182, 212, 0.4)'
            }
          },
          labelLine: {
            show: false
          },
          data: formattedData
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
  }, [datacantidades]);

  return (
    <div className="w-full h-[320px] flex items-center justify-center">
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default FrameworksGraficos;
