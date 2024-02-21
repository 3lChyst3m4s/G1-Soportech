import { useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { SvgChart, SVGRenderer } from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';

const E_HEIGHT = 400;
const E_WIDTH = Dimensions.get('window').width;

echarts.use([SVGRenderer]);

const LineChart = ({ option }) => {
  const skiaRef = useRef<any>(null);

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
  }, [option]);

  return (
    <SvgChart ref={skiaRef} />
  );
}

export default LineChart;