import echarts from 'echarts'

const echartsTheme = {
  seriesCnt: '3',
  backgroundColor: 'rgba(252,252,252,0)',
  titleColor: '#666666',
  subtitleColor: '#999999',
  textColorShow: false,
  textColor: '#333',
  markTextColor: '#ffffff',
  color: [
    '#1890FF',
    '#8543E0',
    '#FACC14',
    '#f173ac',
    '#13C2C2',
    '#bed742',
    '#2FC25B',
    '#7f7522',
    '#F04864',
    '#009ad6',
    '#6b473c',
    '#f15a22',
    '#494e8f',
    '#1d953f',
    '#c76968',
    '#f26522',
    '#6950a1',
    '#c77eb5',
    '#293047',
    '#54211d',
    '#f15a22',
    '#ffd400',
    '#2468a2',
    '#84331f',
  ],
  borderColor: '#ccc',
  borderWidth: 0,
  visualMapColor: ['#2a99c9', '#afe8ff'],
  legendTextColor: '#999999',
  kColor: '#e6a0d2',
  kColor0: 'transparent',
  kBorderColor: '#e6a0d2',
  kBorderColor0: '#3fb1e3',
  kBorderWidth: '2',
  lineWidth: '3',
  symbolSize: '8',
  symbol: 'emptyCircle',
  symbolBorderWidth: '2',
  lineSmooth: false,
  graphLineWidth: '1',
  graphLineColor: '#cccccc',
  mapLabelColor: '#ffffff',
  mapLabelColorE: 'rgb(63,177,227)',
  mapBorderColor: '#aaaaaa',
  mapBorderColorE: '#3fb1e3',
  mapBorderWidth: 0.5,
  mapBorderWidthE: 1,
  mapAreaColor: '#eeeeee',
  mapAreaColorE: 'rgba(63,177,227,0.25)',
  axisSeperateSetting: false,
  toolboxColor: '#999999',
  toolboxEmpasisColor: '#666666',
  tooltipAxisColor: '#cccccc',
  tooltipAxisWidth: 1,
  timelineLineColor: '#626c91',
  timelineLineWidth: 1,
  timelineItemColor: '#626c91',
  timelineItemColorE: '#626c91',
  timelineCheckColor: '#3fb1e3',
  timelineCheckBorderColor: 'rgba(63,177,227,0.15)',
  timelineItemBorderWidth: 1,
  timelineControlColor: '#626c91',
  timelineControlBorderColor: '#626c91',
  timelineControlBorderWidth: 0.5,
  timelineLabelColor: '#626c91',
  datazoomBackgroundColor: 'rgba(255,255,255,0)',
  datazoomDataColor: 'rgba(222,222,222,1)',
  datazoomFillColor: 'rgba(114,230,212,0.25)',
  datazoomHandleColor: '#cccccc',
  datazoomHandleWidth: '100',
  datazoomLabelColor: '#999999',
}

echarts.registerTheme('theme', echartsTheme)

export const { color } = echartsTheme