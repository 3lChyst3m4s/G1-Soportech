import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';

const SolverProgress = ({ solverName, progress }) => {
  const option = {
    series: [
      {
        type: 'progress',
        data: [{ value: progress, itemStyle: { color: '#1890ff' } }],
      },
    ],
  }

  echarts.use([SVGRenderer, BarChart]);

  const skiaRef = useRef(null);
  const E_WIDTH = 400;
  const E_HEIGHT = 400;


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
    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
      <View
        style={{
          width: '90%',
          height: 100,
          borderRadius: 10,
          backgroundColor: '#e0e0e0',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>{solverName}</Text>
        <Text style={{ fontSize: 16 }}>{progress}%</Text>
      </View>
      <View style={{ width: '90%', marginTop: 10 }}>
        <SvgChart ref={skiaRef} />
      </View>
    </View>
  );
};

export default SolverProgress;