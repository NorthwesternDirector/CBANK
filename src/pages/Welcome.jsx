import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col, Avatar, Divider, Button, Popconfirm } from 'antd';
import router from 'umi/router';

export default () => {
  const confirmaccountBook = () => { router.push('/accountBook') }
  const cancel = () => {}
  return (
    <PageHeaderWrapper>
    <Row gutter={24}>
      <Col span={10}>
        <Card>
          <Row gutter={24}>
            <Col span={2} style={{ verticalAlign: 'middle' }}>
              <Avatar shape="circle" size="large" src="https://tfs.alipayobjects.com/images/partner/T1Q1BeXm4eXXXXXXXX"></Avatar>
            </Col>
            <Col span={22}>
              <span style={{ fontSize: 18, marginLeft: 20, verticalAlign: 'middle' }}>单位：武汉市洪山区中信第三支行</span>
              <div style={{ marginLeft: 20, marginBottom: 0, verticalAlign: 'middle', color: '#999' }}>
                单位编号: CBANK20100101<Divider type="vertical" />成立时间：2010.01.01
              </div>
              <Divider style={{ color: '#999', fontSize: 12 }}>查账功能快速入口</Divider>
              <Popconfirm
                title="创建新的对账批次 201912120033?"
                onConfirm={confirmaccountBook}
                onCancel={cancel}
                okText="确定"
                cancelText="取消"
              >
                <Button type="default" style={{ marginTop: 10, marginLeft: 24 }}>快速对账</Button>
              </Popconfirm>

              <Button type="default" style={{ marginTop: 10, marginLeft: 24 }} onClick={ () => router.push('/consumptionDetails') }>账单明细</Button>
              <Button type="default" style={{ marginTop: 10, marginLeft: 24 }} onClick={ () => router.push('/statistics') }>账单统计</Button>
            </Col>
          </Row>


        </Card>
      </Col>
    </Row>
  </PageHeaderWrapper>
  )
}
