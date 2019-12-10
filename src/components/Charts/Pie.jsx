import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Pie = ({
  data,
  title,
  chartHeight = 300,
  radius = '50%',
  center = ['50%', '52%'],
  selectType,
}) => {
  console.log(selectType.slice(2))
  const option = {
    title: {
      text: title,
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}元 ({d}%)',
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: data[0][selectType.slice(2)].details.map(item => item.key),
      type: 'scroll',
    },
    series: {
      name: selectType.slice(2) === 'out' ? '支出' : '收入',
      center,
      type: 'pie',
      radius,
      data: data[0][selectType.slice(2)].details.map(itemss => ({ name: itemss.key, value: itemss.value })),
      minShowLabbelAngle: 10,
      selectedMode: 'single',
      label: {
        normal: {
            formatter: '\b {b|{b}: }{c}元 \b\n{hr|}\n {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
                a: {
                    color: '#999',
                    lineHeight: 15,
                    align: 'center',
                },
                hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0,
                },
                b: {
                    fontSize: 12,
                    lineHeight: 20,
                    align: 'center',
                },
                per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                     padding: [1, 2],
                    borderRadius: 2,
                    align: 'center',
                },
            },
        },
      },
      laeblLine: {
        smooth: true,
        length: 10,
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowColor: 'rgba(0,0,0,0.5)',
        },
      },
    },
  }
  return <ReactEcharts theme="theme" option={option} notMerge style={{ height: chartHeight }}></ReactEcharts>
}

export default Pie
