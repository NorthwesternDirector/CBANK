import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Timeline, Icon, Row, Col, Progress, Divider } from 'antd';
import { connect } from 'dva'

const AnnualReport = () => {
  const a = 0
  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Row gutter={24}>
              <Col span={5} style={{ fontSize: 30 }}>
                <p style={{ marginBottom: 5 }}>全年总对账次数</p>
                <p><span style={{ color: '#4169E1', fontWeight: 'bolder', marginRight: 4 }}>297</span>次</p>
              </Col>
              <Col span={5} style={{ fontSize: 30 }}>
                <p style={{ marginBottom: 5 }}>累计查算金额</p>
                <p><span style={{ color: '#4169E1', fontWeight: 'bolder', marginRight: 4 }}>3.58</span>亿</p>
              </Col>
              <Col span={5} style={{ fontSize: 30 }}>
                <p style={{ marginBottom: 5 }}>对账成功率</p>
                <p><span style={{ color: '#4169E1', fontWeight: 'bolder', marginRight: 4 }}>89</span>%</p>
              </Col>
              <Col span={5}>
               <p style={{ marginBottom: 0 }}>超过全国<span style={{ fontSize: 20 }}>72%</span>的支行单位</p>
               <Progress percent={72} status="active" showInfo={false}/>
              </Col>
              <Col span={4}>
               <p style={{ marginBottom: 0 }}>在武汉市排名</p>
               <p style={{ marginBottom: 0 }}>第 <span style={{ fontSize: 20 }}>2</span>名</p>
              </Col>
          </Row>
          <Row gutter={24}>


          </Row>
          <p style={{ textAlign: 'center', fontSize: 20, color: '#888' }}>全年大事记</p>
        <Timeline mode="alternate">
          <Timeline.Item><p style={{ marginBottom: 0 }}>2019.01.01</p> <p style={{ marginBottom: 0 }}>进行了全年第一次对账</p></Timeline.Item>
          <Timeline.Item color="green"><p style={{ marginBottom: 0 }}>2019.03.27</p> <p style={{ marginBottom: 0 }}>这一晚03:30还进行对账操作</p></Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            <p style={{ marginBottom: 0 }}>2019.05.17</p>
            <p style={{ marginBottom: 0 }}>解决了一笔五千万的遗漏款</p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <p style={{ marginBottom: 0 }}>2019.06.21</p>
            <p style={{ marginBottom: 0 }}>得到了中信总行的对账先进集体荣誉</p>
          </Timeline.Item>
          <Timeline.Item>
            <p style={{ marginBottom: 0 }}>2019.11.11</p>
            <p style={{ marginBottom: 0 }}>一天之内对账38次</p>
          </Timeline.Item>
        </Timeline>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect()(AnnualReport)
