import { mockData } from '../../utils/utils'

export default {
  '/api/queryExpenseList': mockData([
    { key: 1, 分类: '生活缴费', 交易时间: '2019-12-09 18:00:20', 交易内容: '天海物业有限公司 | 天燃气缴费 | 流水号:20191209xx', 金额: -50, 状态: '交易成功' },
    { key: 2, 分类: '交通', 交易时间: '2019-12-08 15:30:11', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191208xx', 金额: -7.5, 状态: '交易成功' },
    { key: 3, 分类: '医疗', 交易时间: '2019-12-07 16:43:41', 交易内容: '中南医院 | 核磁共振检查 | 流水号:20191207xx', 金额: -1050, 状态: '交易成功' },
    { key: 4, 分类: '教育', 交易时间: '2019-12-06 20:55:23', 交易内容: '中国海洋大学 | 学费 | 流水号:20191206xx', 金额: -5000, 状态: '交易成功' },
    { key: 5, 分类: '工资', 交易时间: '2019-12-05 20:55:19', 交易内容: '中信银行 | 十二月工资单 | 流水号:20191205xx', 金额: +15000, 状态: '交易成功' },
    { key: 6, 分类: '交通', 交易时间: '2019-12-04 18:30:07', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191204xx', 金额: -5, 状态: '交易成功' },
    { key: 7, 分类: '购物', 交易时间: '2019-12-03 12:55:54', 交易内容: 'nike | 超级保暖羽绒服xxxl | 流水号:20191205xx', 金额: -700, 状态: '交易成功' },
    { key: 8, 分类: '转账', 交易时间: '2019-12-02 08:15:33', 交易内容: '银行卡转账 | 朋友（*小明） | 流水号:20191205xx', 金额: +320, 状态: '交易成功' },
    { key: 9, 分类: '交通', 交易时间: '2019-12-01 18:30:04', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191204xx', 金额: -3.5, 状态: '交易成功' },
    { key: 10, 分类: '购物', 交易时间: '2019-11-30 16:17:04', 交易内容: 'nike | 超级保暖羽绒服xxxl | 流水号:20191205xx', 金额: -700, 状态: '交易成功' },
    { key: 11, 分类: '生活缴费', 交易时间: '2019-11-29 18:00:20', 交易内容: '天海物业有限公司 | 天燃气缴费 | 流水号:20191209xx', 金额: -50, 状态: '交易成功' },
    { key: 12, 分类: '交通', 交易时间: '2019-11-28 15:30:11', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191208xx', 金额: -5.5, 状态: '交易成功' },
    { key: 13, 分类: '医疗', 交易时间: '2019-11-27 16:43:41', 交易内容: '中南医院 | 体检 | 流水号:20191207xx', 金额: -100, 状态: '交易成功' },
    { key: 14, 分类: '教育', 交易时间: '2019-11-26 20:55:23', 交易内容: '中国海洋大学 | 英语四六级缴费 | 流水号:20191206xx', 金额: -60, 状态: '交易成功' },
    { key: 15, 分类: '工资', 交易时间: '2019-11-25 20:55:19', 交易内容: '中信银行 | 十一月工资单 | 流水号:20191205xx', 金额: +15000, 状态: '交易成功' },
    { key: 16, 分类: '交通', 交易时间: '2019-11-24 18:30:07', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191204xx', 金额: -5, 状态: '交易成功' },
    { key: 17, 分类: '购物', 交易时间: '2019-11-23 12:55:54', 交易内容: 'nike | 超级保暖羽绒服xxxl | 流水号:20191205xx', 金额: -700, 状态: '交易成功' },
    { key: 18, 分类: '转账', 交易时间: '2019-11-22 08:15:33', 交易内容: '银行卡转账 | 朋友（*小明） | 流水号:20191205xx', 金额: +220, 状态: '交易成功' },
    { key: 19, 分类: '交通', 交易时间: '2019-11-21 18:30:04', 交易内容: '武汉市轨道交通 | 地铁 | 流水号:20191204xx', 金额: -4.5, 状态: '交易成功' },
    { key: 20, 分类: '购物', 交易时间: '2019-11-20 16:17:04', 交易内容: 'nike | 运动长裤xxxl | 流水号:20191205xx', 金额: -500, 状态: '交易成功' },


  ]),
  '/api/linePoints': mockData(),
}