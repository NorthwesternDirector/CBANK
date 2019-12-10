import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col, Avatar, Divider } from 'antd';
import styles from './Welcome.less';

export default () => (
  <PageHeaderWrapper>
    <Row gutter={24}>
      <Col span={8}>
        <Card>
          <Row gutter={24}>
            <Col span={2} style={{ verticalAlign: 'middle' }}>
              <Avatar shape="circle" size="large" src="https://tfs.alipayobjects.com/images/partner/T1Q1BeXm4eXXXXXXXX"></Avatar>
            </Col>
            <Col span={22}>
              <span style={{ fontSize: 18, marginLeft: 20, verticalAlign: 'middle' }}>用户 6216 ****** 3600</span>
              <div style={{ marginLeft: 20, marginBottom: 0, verticalAlign: 'middle', color: '#999' }}>
                开户网点: 中信银行武汉市洪山第二支行<Divider type="vertical" />
              </div>
            </Col>
          </Row>


        </Card>
      </Col>
    </Row>


  </PageHeaderWrapper>
);
