import React, { useState, useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Button, Row, Col, Descriptions, Table, Divider, DatePicker, Radio, Popconfirm, Modal, Result } from 'antd';
import { connect } from 'dva'
import router from 'umi/router';

const AccountBook = ({ dispatch, accountListL, accountListR, loading }) => {
  const [selectDate, setSelectDate] = useState('')
  const [selectRange, setSelectRange] = useState('day')
  const [modelState, setModelState] = useState(false)
  const [dataOk, setDataOk] = useState(false)
  const columns = [
    {
      title: '交易时间1',
      dataIndex: '交易时间1',
      key: '交易时间1',
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
      render: text => `¥${text.toLocaleString()}`,
    },
  ]

  const getRemoteList = () => {
    dispatch({
      type: 'accountBook/fetchAccountListR',
      payload: {
        selectDate,
        selectRange,
      },
    })
  }

  useEffect(() => {
    dispatch({
      type: 'accountBook/fetchAccountListL',
      payload: {
        selectDate,
        selectRange,
      },
    })
    return () => dispatch({
      type: 'accountBook/clearData',
    })
  }, [selectDate, selectRange])

  return (
    <>
      <PageHeaderWrapper>
        <Card>
        <Descriptions title="对账批次201912120033">
          <Descriptions.Item label="单位编号">CBANK20100101</Descriptions.Item>
          <Descriptions.Item label="单位">武汉市洪山区中信第三支行</Descriptions.Item>
          <Descriptions.Item label="上次对账日期">2019.12.11</Descriptions.Item>
        </Descriptions>
        </Card>
        <Card style={{ marginTop: 8 }}>
          <Row gutter={24}>
            时间粒度：
            <Radio.Group
              defaultValue={selectRange}
              buttonStyle="solid"
              style={{ marginRight: 24 }}
              onChange={e => setSelectRange(e.target.value)}
            >
              <Radio.Button value="day">日</Radio.Button>
              <Radio.Button value="week">周</Radio.Button>
              <Radio.Button value="month">月</Radio.Button>
            </Radio.Group>
            时间范围：
            {
              selectRange === 'day' && <DatePicker
              size="large" placeholder="选择日期"
              onChange={date => setSelectDate(date.format('YYYY-MM-DD'))}
              />
            }
            {
              selectRange === 'week' && <DatePicker.WeekPicker
              size="large" placeholder="选择日期"
              onChange={date => setSelectDate(`2019-${date.weeks()}week`)}
              />
            }
            {
              selectRange === 'month' && <DatePicker.MonthPicker
              size="large" placeholder="选择日期"
              onChange={date => setSelectDate(date.format('YYYY-MM'))}
              />
            }
            <Button type="default" style={{ marginBottom: 10, marginLeft: 24 }} onClick={getRemoteList}>加载支付机构账单</Button>
            <Divider dashed />
            <Col span={24} style={{ textAlign: 'center' }}>
              <span style={{ marginTop: 10, textAlign: 'center' }}>支付机构-账单</span>
              <Popconfirm
                title="以此账单为基准对账?"
                okText="确定"
                cancelText="取消"
                onConfirm={() => {
                  setDataOk(true)
                  setModelState(true)
                }}
              >
                <Button shape="circle" style={{ marginBottom: 10, marginLeft: 8 }} icon="monitor"/>
              </Popconfirm>
              <Table dataSource={accountListR} columns={columns} loading={loading}></Table>
              <Divider dashed />
              <span style={{ marginTop: 10, textAlign: 'center' }}>本地账单</span>
              <Popconfirm
                title="以此账单为基准对账?"
                okText="确定"
                cancelText="取消"
                onConfirm={() => {
                  setDataOk(false)
                  setModelState(true)
                }}
              >
                <Button shape="circle" style={{ marginBottom: 10, marginLeft: 8 }} icon="monitor" />
              </Popconfirm>
              <Table dataSource={accountListL} columns={columns}></Table>
            </Col>
          </Row>
          <Modal
          title="对账批次 201912120033"
          visible={modelState}
          onCancel={() => {
            setModelState(false)
          }}
          style={{ textAlign: 'center' }}
          bodyStyle={{ height: 251 }}
          footer={null}
          >
            {
            dataOk ? <Result
              status="warning"
              title="账单存在问题"
              style={{ padding: 0 }}
              extra={
                <Button type="primary" key="console" onClick={() => router.push('/accountConfirm')}>
                 查看详情
                </Button>
              }
              /> :
              <Result
              status="success"
              title="账单准确"
              style={{ padding: 0 }}
              extra={
                <Button type="primary" key="console" onClick={() => router.push('/accountConfirm')}>
                 查看详情
                </Button>
              }
              />
            }
          </Modal>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect(({ loading, accountBook }) => ({
  loading: loading.effects['accountBook/fetchAccountListR'],
  accountListR: accountBook.accountListR,
  accountListL: accountBook.accountListL,
}))(AccountBook)
