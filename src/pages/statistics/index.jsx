import React, { useState, useEffect, useMemo } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Col, DatePicker, Button } from 'antd';
import { connect } from 'dva'
import moment from 'moment'
import Line from '../../components/Charts/Line'
import Pie from '../../components/Charts/Pie'
import '../../components/Charts/echartsTheme'

const Statistics = ({ loading, expenseListByMonth, dispatch }) => {
  const [selectDate, setSelectDate] = useState('2019-12')
  const [selectType, setSelectType] = useState('0-out')
  const selectDates = useMemo(() => {
    const arrayLength = Math.abs(moment(selectDate).diff(moment(selectDate).add(1, 'month'), 'days'))
    return new Array(arrayLength).fill(1).map((val, index, array) =>
      moment(moment(selectDate).add(1, 'month')).subtract(array.length - index, 'days').format('MM-DD'),
    )
  }, [selectDate])

  useEffect(() => {
    dispatch({
      type: 'statistics/fetchExpenseList',
      payload: {
        date: selectDate,
      },
    })
  }, [selectDate, selectType])

  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Row gutter={24}>
            <Col span={6}>
              时间范围选择：
              <DatePicker.MonthPicker
                size="large" placeholder="选择日期"
                defaultValue={moment(selectDate)}
                onChange={date => setSelectDate(date.format('YYYY-MM'))}
              />
            </Col>
            <Col span={4} offset={2}>
              <Card style={{ textAlign: 'center' }} onClick={() => setSelectType('0-out')} hoverable>
                支出
                {expenseListByMonth && expenseListByMonth.length ? <p style={{ fontSize: 25, marginBottom: 0 }}>¥{expenseListByMonth[0].out.total}</p> : <p></p>}
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{ textAlign: 'center' }} onClick={() => setSelectType('1-in')} hoverable>
                收入
                {expenseListByMonth && expenseListByMonth.length ? <p style={{ fontSize: 25, marginBottom: 0 }}>¥{expenseListByMonth[0].in.total}</p> : <p></p>}
              </Card>
            </Col>
          </Row>
          <Row gutter={24} style={{ marginTop: 24 }}>
            <Col span={12}>
              <Card>
                {selectType === '0-out' ? '每日支出' : '每日收入'}
                {expenseListByMonth && expenseListByMonth.length ? <Line data={expenseListByMonth} selectType={selectType} category={selectDates} chartHeight={300}></Line> : null}
              </Card>
            </Col>
            <Col span={12}>
              <Card>
              {selectType === '0-out' ? '支出分类' : '收入分类'}
              {expenseListByMonth && expenseListByMonth.length ? <Pie data={expenseListByMonth} selectType={selectType} chartHeight={300} radius = "58%" center = {['50%', '45%']}></Pie> : null}
              </Card>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect(({ loading, statistics }) => ({
  loading: loading.effects['statistics/fetchExpenseList'],
  expenseListByMonth: statistics.expenseListByMonth,
}))(Statistics)
