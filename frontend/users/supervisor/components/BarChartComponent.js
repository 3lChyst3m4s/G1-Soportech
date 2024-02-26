import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';
import { Dimensions } from 'react-native';

echarts.use([SVGRenderer, BarChart]);

const BarChartComponent = () => {
  const E_HEIGHT = 400;
  const E_WIDTH = Dimensions.get('screen').width;

  const option = {
    xAxis: {
      type: 'category',
      data: ['F', 'Ang', 'Ant', 'Tr', 'Su','S','D','J'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
       data: [
      {
        value: 0.1,
        itemStyle: {
          color: '#32327D'
        }
      },
      {
        value: 0.1,
        itemStyle: {
          color: '#6D62F7'
        }
      },
      {
        value: 0.5,
        itemStyle: {
          color: '#8892EF'
        }
      },
      {
        value: 0.7,
        itemStyle: {
          color: '#AC62F7'
        }
      },
      {
        value: 0.5,
        itemStyle: {
          color: '#F762A1'
        }
      },
      
      {
        value: 0.1,
        itemStyle: {
          color: '#F7626B'
        }
      },
      {
        value: 0.1,
        itemStyle: {
          color: '#F7CD62'
        }
      }
      ,
      {
        value: 0.8,
        itemStyle: {
          color: '#62CAF7'
        }
      }
    ],
        type: 'bar',
        itemStyle: {
          borderRadius: 30
        }
      },
    ]
  };

  const skiaRef = useRef(null);

  useEffect(() => {
    let chart;

    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });

      chart.setOption(option);
    }

    return () => chart?.dispose();
  }, []);

  return (
    <SvgChart ref={skiaRef} />
  );
}

export default BarChartComponent;