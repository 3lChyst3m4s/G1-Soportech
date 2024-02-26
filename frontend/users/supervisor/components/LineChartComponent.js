import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';
import { Dimensions, View } from 'react-native';

echarts.use([SVGRenderer, LineChart, GridComponent, PieChart, TooltipComponent, LegendComponent]);

const LineChartComponent = ({ option }) => {
  const skiaRef = useRef(null);

  const E_HEIGHT = 400;
  const E_WIDTH = Dimensions.get('screen').width;


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
    <View style={{position: "absolute", top: "-75%"}}>
      <SvgChart ref={skiaRef} />
    </View>
  );
}

export default LineChartComponent;