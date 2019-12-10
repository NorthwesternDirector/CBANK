import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Line = ({
  title,
  data,
  selectType,
  category,
  chartHeight,
}) => {
  const newData = data.slice(1).map(
    val => (
      { key: val.details[Number(selectType.slice(0, 1))].交易时间.substring(5, 10), value: Math.abs(val.details[Number(selectType.slice(0, 1))].金额) }
      ),
  )

  const option = {
    title: {
      text: title,
      x: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: 40,
      left: 50,
      right: 100,
      bottom: 50,
      containLabebl: true,
    },
    xAxis: {
      type: 'category',
      data: category,

    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: {
      // name: data,
      type: 'line',
      smooth: false,
      data: newData,
    },

  }
  return <ReactEcharts theme="theme" option={option} style={{ height: chartHeight }}></ReactEcharts>
}

export default React.memo(Line, (pre, next) => JSON.stringify(pre) === JSON.stringify(next))
