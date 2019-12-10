import React, { useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Tabs, Table, Avatar, Icon } from 'antd';
import { connect } from 'dva'


const ConsumptionDetail = ({ loading, expenseList, dispatch }) => {
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1553982_4l1dyy00y1d.js',
  })
  const columns = [
    {
      title: '分类',
      dataIndex: '分类',
      key: '分类',
      align: 'center',
      render: text => {
        switch (text) {
          case '生活缴费':
            return <><IconFont type="icon-jiaofei" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '交通':
            return <><IconFont type="icon-jiaotong"style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '医疗':
            return <><IconFont type="icon-yiliao" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '教育':
            return <><IconFont type="icon-jiaoyu" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '工资':
            return <><IconFont type="icon-gongzi" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '饮食':
            return <><IconFont type="icon-yingshi" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          case '购物':
            return <><IconFont type="icon-gouwu" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
          default:
            return <><IconFont type="icon-gongzi" style={{ width: 25, fontSize: 25, verticalAlign: 'middle' }}/></>
        }
      },
    },
    {
      title: '交易时间',
      dataIndex: '交易时间',
      key: '交易时间',
    },
    {
      title: '名称 | 对方 | 交易号',
      dataIndex: '交易内容',
      key: '交易内容',
    },
    {
      title: '金额',
      dataIndex: '金额',
      key: '金额',
      render: text => (Number(text) > 0 ? <a style={{ color: 'red' }}>{text}</a> : <a style={{ color: 'green' }}>{text}</a>),
    },
    {
      title: '状态',
      dataIndex: '状态',
      key: '状态',
    },
    {
      title: '操作',

    },
  ]

  useEffect(() => {
    dispatch({
      type: 'consumptionDetails/fetchExpenseList',
    })
  }, [])

  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Table columns={columns} dataSource={expenseList} loading={loading} size="middle" pagination={{ pageSize: 9 }}></Table>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect(({ loading, consumptionDetails }) => ({
  loading: loading.effects['consumptionDetails/fetchExpenseList'],
  expenseList: consumptionDetails.expenseList,
}))(ConsumptionDetail)
