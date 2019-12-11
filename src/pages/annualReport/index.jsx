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
              <Col span={6} style={{ fontSize: 30 }}>
                <p style={{ marginBottom: 5 }}>全年总支出</p>
                <p><span style={{ color: '#4169E1', fontWeight: 'bolder', marginRight: 4 }}>506499.5</span>元</p>
              </Col>
          </Row>
          <Row gutter={24}>
              <Col span={6}>
               <p style={{ marginBottom: 0 }}>超过全国 <span style={{ fontSize: 20 }}>72%</span>的人</p>
               <Progress percent={72} status="active" showInfo={false}/>
              </Col>
              <Col span={4}>
               <p style={{ marginBottom: 0 }}>在洪山区排名</p>
               <p style={{ marginBottom: 0 }}>第 <span style={{ fontSize: 20 }}>33567</span>名</p>
              </Col>

          </Row>
          <p style={{ textAlign: 'center', fontSize: 20, color: '#888' }}>全年大事记</p>
        <Timeline mode="alternate">
          <Timeline.Item><p style={{ marginBottom: 0 }}>2019.01.01</p> <p style={{ marginBottom: 0 }}>支付了你全年的第一笔账单</p></Timeline.Item>
          <Timeline.Item color="green"><p style={{ marginBottom: 0 }}>2019.03.27</p> <p style={{ marginBottom: 0 }}>这一晚03:30你还进行了一笔支付</p></Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            <p style={{ marginBottom: 0 }}>2019.05.17</p>
            <p style={{ marginBottom: 0 }}>第一次给朋友转账</p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <p style={{ marginBottom: 0 }}>2019.06.21</p>
            <p style={{ marginBottom: 0 }}>收到了朋友的第一个红包</p>
          </Timeline.Item>
          <Timeline.Item>
            <p style={{ marginBottom: 0 }}>2019.11.11</p>
            <p style={{ marginBottom: 0 }}>这一天你一小时内消费了5w</p>
          </Timeline.Item>
        </Timeline>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect()(AnnualReport)
