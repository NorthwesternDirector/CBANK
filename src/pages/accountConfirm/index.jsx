import React, { useState } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Collapse, Button, Popconfirm, Icon, Descriptions, Divider, Table, notification, Tag } from 'antd';
import { connect } from 'dva'
import moment from 'moment'

const AnnualReport = () => {
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1553982_iqhqk32t6qk.js',
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        确认
      </Button>
    );
    notification.open({
      message: '处理成功！',
      description:
        '本次人工处理已生效，修改内容已提交至系统，请等待后续处理',
      btn,
      key,
      icon: <Icon type="check-circle" style={{ color: '#00CD00' }} />,
    });
  };
  const columns = [
    {
      title: '错误类型',
      dataIndex: '错误类型',
      key: '错误类型',
      render: text => <Tag color="red" style={{ marginLeft: 5, verticalAlign: 'middle' }}>{text}</Tag>,
    },
    {
      title: '账单来源',
      dataIndex: '账单来源',
      key: '账单来源',
    },
    {
      title: '交易时间',
      dataIndex: '交易时间',
      key: '交易时间',
    },
    {
      title: '交易状态',
      dataIndex: '交易状态',
      key: '交易状态',
    }, {
      title: '结算方式',
      dataIndex: '结算方式',
      key: '结算方式',
    }, {
      title: '票据号',
      dataIndex: '票据号',
      key: '票据号',
    }, {
      title: '金额',
      dataIndex: '金额',
      key: '金额',
      render: text => <span style={{ fontWeight: 'bolder', color: '#FF3030' }}>¥{text.toLocaleString()}</span>,
    }, {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 150,
        render: () =>
          <>
          <Button disabled={buttonDisabled} size="small">编辑</Button>
          <Divider type="vertical" />
          <Button disabled={buttonDisabled} size="small" onClick={openNotification}>提交</Button>
          </>
        ,
      },
  ]
  const data = [
    { key: 1, 错误类型: '金额差错', 账单来源: '本地账单', 交易时间: '2019-12-09 00:23', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72000 },
    { key: 2, 错误类型: '金额差错', 账单来源: '支付机构账单', 交易时间: '2019-12-09 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 20000 }]

  const data1 = [
    { key: 1, 错误类型: '平台长款', 账单来源: '支付机构账单', 交易时间: '2019-12-09 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 20000 }]

  const data2 = [
    { key: 1, 错误类型: '记录漏单', 账单来源: '本地账单', 交易时间: '2019-12-09 00:23', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72000 }]

  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Collapse defaultActiveKey={['1']} >
            <Collapse.Panel header={<><IconFont type="icon-cuo" style={{ fontSize: 15 }}/> 批次 201912120033 ｜ 对账基准：本地账单</>} key="1">
              <Descriptions title="对账概览">
                <Descriptions.Item label="完成时间">{moment().format('YYYY-MM-DD hh:mm:ss')}</Descriptions.Item>
                <Descriptions.Item label="对账成功">否</Descriptions.Item>
                <Descriptions.Item label="批次金额">300,000</Descriptions.Item>
                <Descriptions.Item label="平账">金额 ¥11,700,000<Divider type="vertical" />订单数 2</Descriptions.Item>
                <Descriptions.Item label="金额差错">金额 ¥52,000<Divider type="vertical" />订单数 1</Descriptions.Item>
                <Descriptions.Item label="缓存池">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
              </Descriptions>
              <Table columns={columns} dataSource={data} pagination={false} style={{ marginBottom: 24 }}></Table>
              <Popconfirm
                title="确定打印本次对账结果?"
                okText="是"
                cancelText="否"
              >
                <Button shape="circle" icon="printer" />
              </Popconfirm>
              <Button type="primary" style={{ marginLeft: 8 }} onClick={() => setButtonDisabled(!buttonDisabled)}>人工处理</Button>
              <Popconfirm
                title="将此次对账结果对接下游流程?"
                okText="是"
                cancelText="否"
              >
              <Button type="primary" style={{ marginLeft: 8 }}>自动处理</Button>
              </Popconfirm>
            </Collapse.Panel>
            <Collapse.Panel header={<><IconFont type="icon-cuo" style={{ fontSize: 15 }}/> 批次 201912120032 ｜ 对账基准：支付机构账单</>} key="5">
              <Descriptions title="对账概览">
                <Descriptions.Item label="完成时间">{moment().format('YYYY-MM-DD hh:mm:ss')}</Descriptions.Item>
                <Descriptions.Item label="对账成功">否</Descriptions.Item>
                <Descriptions.Item label="批次金额">300,000</Descriptions.Item>
                <Descriptions.Item label="平账">金额 ¥11,700,000<Divider type="vertical" />订单数 2</Descriptions.Item>
                <Descriptions.Item label="金额差错">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
                <Descriptions.Item label="平台长款">金额 ¥1000<Divider type="vertical" />订单数 1</Descriptions.Item>
                <Descriptions.Item label="缓存池">金额 ¥1000<Divider type="vertical" />订单数 1</Descriptions.Item>
              </Descriptions>
              <Table columns={columns} dataSource={data1} pagination={false} style={{ marginBottom: 24 }}></Table>
              <Popconfirm
                title="确定打印本次对账结果?"
                okText="是"
                cancelText="否"
              >
                <Button shape="circle" icon="printer" />
              </Popconfirm>
              <Button type="primary" style={{ marginLeft: 8 }} onClick={() => setButtonDisabled(!buttonDisabled)}>人工处理</Button>
              <Popconfirm
                title="将此次对账结果对接下游流程?"
                okText="是"
                cancelText="否"
              >
              <Button type="primary" style={{ marginLeft: 8 }}>自动处理</Button>
              </Popconfirm>
            </Collapse.Panel>
            <Collapse.Panel header={<><IconFont type="icon-dui" style={{ fontSize: 15 }}/> 批次 201912110005 ｜ 对账基准：支付机构账单</>} key="2">
              <Descriptions title="对账概览">
                <Descriptions.Item label="完成时间">2019-12-11 8:30</Descriptions.Item>
                <Descriptions.Item label="对账成功">是</Descriptions.Item>
                <Descriptions.Item label="批次金额">¥8,000,000</Descriptions.Item>
                <Descriptions.Item label="平账">金额 ¥8,000,000<Divider type="vertical" />订单数 35</Descriptions.Item>
                <Descriptions.Item label="金额差错">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
                <Descriptions.Item label="缓存池">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
              </Descriptions>
              <Popconfirm
                title="确定打印本次对账结果?"
                okText="是"
                cancelText="否"
              >
                <Button shape="circle" icon="printer" />
              </Popconfirm>
              <Button type="default" style={{ marginLeft: 8 }}>对账详情</Button>
            </Collapse.Panel>
            <Collapse.Panel header={<><IconFont type="icon-dui" style={{ fontSize: 15 }}/> 批次 201912100029 ｜ 对账基准：本地账单</>} key="3">
              <Descriptions title="对账概览">
                <Descriptions.Item label="完成时间">2019-12-10 14:21</Descriptions.Item>
                <Descriptions.Item label="对账成功">是</Descriptions.Item>
                <Descriptions.Item label="批次金额">¥57,300,000</Descriptions.Item>
                <Descriptions.Item label="平账">金额 ¥57,300,000<Divider type="vertical" />订单数 108</Descriptions.Item>
                <Descriptions.Item label="金额差错">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
                <Descriptions.Item label="缓存池">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
              </Descriptions>
              <Popconfirm
                title="确定打印本次对账结果?"
                okText="是"
                cancelText="否"
              >
                <Button shape="circle" icon="printer" />
              </Popconfirm>
              <Button type="default" style={{ marginLeft: 8 }}>对账详情</Button>
            </Collapse.Panel>
            <Collapse.Panel header={<><IconFont type="icon-dui" style={{ fontSize: 15 }}/> 批次 201912090653 ｜ 对账基准：支付机构账单</>} key="4">
              <Descriptions title="对账概览">
                <Descriptions.Item label="完成时间">2019-12-11 17:08</Descriptions.Item>
                <Descriptions.Item label="对账成功">是</Descriptions.Item>
                <Descriptions.Item label="批次金额">¥18,000,000</Descriptions.Item>
                <Descriptions.Item label="平账">金额 ¥18,000,000<Divider type="vertical" />订单数 76</Descriptions.Item>
                <Descriptions.Item label="金额差错">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
                <Descriptions.Item label="缓存池">金额 ¥0<Divider type="vertical" />订单数 0</Descriptions.Item>
              </Descriptions>
              <Popconfirm
                title="确定打印本次对账结果?"
                okText="是"
                cancelText="否"
              >
                <Button shape="circle" icon="printer" />
              </Popconfirm>
              <Button type="default" style={{ marginLeft: 8 }}>对账详情</Button>
            </Collapse.Panel>
          </Collapse>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect()(AnnualReport)
