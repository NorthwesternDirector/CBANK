import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { connect } from 'dva'

const Statistics = () => {
  const a = 0
  return (
    <>
      <PageHeaderWrapper>
        <Card>
          {a}
        </Card>
      </PageHeaderWrapper>
    </>
  )
}

export default connect()(Statistics)