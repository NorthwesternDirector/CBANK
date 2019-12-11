import { mockData } from '../../utils/utils'

export default {
  '/api/queryMountBook/local': mockData([
    { key: 1, 交易时间: '2020-04-25 13:23', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 10500000 },
    { key: 2, 交易时间: '2020-04-26 23:33', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK178927', 金额: 30006700 },
    { key: 3, 交易时间: '2020-04-27 14:09', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK179723', 金额: 40580000 },
    { key: 4, 交易时间: '2020-04-28 08:16', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK180320', 金额: 500067098900 },
    { key: 5, 交易时间: '2020-04-28 09:17', 结算方式: '现金', 交易状态: '交易成功', 票据号: 'CBANK182329', 金额: 500000 },
  ]),
  '/api/queryMountBook/local/day/2019-12-09': mockData([
    { key: 1, 交易时间: '2019-12-09 00:23', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72000 },
    { key: 2, 交易时间: '2019-12-09 18:19', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 5300000 },
    { key: 3, 交易时间: '2019-12-09 09:07', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 6400000 },
  ]),
  '/api/queryMountBook/local/day/2019-12-08': mockData([
    { key: 1, 交易时间: '2019-12-08 13:04', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 74200000 },
    { key: 2, 交易时间: '2019-12-08 14:33', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 3300000 },
    { key: 3, 交易时间: '2019-12-08 15:09', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 1400000 },
    { key: 4, 交易时间: '2019-12-08 19:45', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 1400000 },
  ]),
  '/api/queryMountBook/local/day/2019-12-07': mockData([
    { key: 1, 交易时间: '2019-12-07 17:00', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72300000 },
    { key: 2, 交易时间: '2019-12-07 18:00', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-07 19:05', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-07 20:00', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-07 21:00', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/local/week/2019-49week': mockData([
    { key: 1, 交易时间: '2019-12-02 06:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72300000 },
    { key: 2, 交易时间: '2019-12-03 07:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-04 08:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-05 09:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-06 10:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-12-07 11:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-08 12:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/local/week/2019-48week': mockData([
    { key: 1, 交易时间: '2019-11-25 06:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72300000 },
    { key: 2, 交易时间: '2019-11-26 07:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-11-27 08:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-11-28 09:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-11-29 10:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-11-30 11:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-01 12:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/local/month/2019-12': mockData([
    { key: 1, 交易时间: '2019-12-02 06:03 ', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72300000 },
    { key: 2, 交易时间: '2019-12-03 07:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-04 08:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-05 09:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-06 10:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-12-07 11:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-08 12:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/local/month/2019-11': mockData([
    { key: 1, 交易时间: '2019-11-25 06:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 72300000 },
    { key: 2, 交易时间: '2019-11-26 07:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-11-27 08:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-11-28 09:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-11-29 10:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-11-30 11:03', 结算方式: '转账支票', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),

  '/api/queryMountBook/remote': mockData([
    { key: 1, 交易时间: '2020-04-25 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 50000000 },
    { key: 2, 交易时间: '2020-04-26 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 43400000 },
    { key: 3, 交易时间: '2020-04-27 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4300000 },
  ]),
  '/api/queryMountBook/remote/day/2019-12-09': mockData([
    { key: 1, 交易时间: '2019-12-09 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 20000 },
    { key: 2, 交易时间: '2019-12-09 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 5300000 },
    { key: 3, 交易时间: '2019-12-09 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 6400000 },
  ]),
  '/api/queryMountBook/remote/day/2019-12-08': mockData([
    { key: 1, 交易时间: '2019-12-08 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 4200000 },
    { key: 2, 交易时间: '2019-12-08 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 3300000 },
    { key: 3, 交易时间: '2019-12-08 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 1400000 },
    { key: 4, 交易时间: '2019-12-08 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 1400000 },
  ]),
  '/api/queryMountBook/remote/day/2019-12-07': mockData([
    { key: 1, 交易时间: '2019-12-07 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 2300000 },
    { key: 2, 交易时间: '2019-12-07 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-07 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-07 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-07 10:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/remote/week/2019-49week': mockData([
    { key: 1, 交易时间: '2019-12-02 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 2300000 },
    { key: 2, 交易时间: '2019-12-03 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-04 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-05 10:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-06 11:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-12-07 13:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-08 14:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/remote/week/2019-48week': mockData([
    { key: 1, 交易时间: '2019-11-25 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 2300000 },
    { key: 2, 交易时间: '2019-11-26 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-11-27 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-11-28 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-11-29 12:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-11-30 14:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-01 18:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/remote/month/2019-12': mockData([
    { key: 1, 交易时间: '2019-12-02 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 2300000 },
    { key: 2, 交易时间: '2019-12-03 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-12-04 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-12-05 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-12-06 10:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-12-07 11:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 7, 交易时间: '2019-12-08 12:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
  '/api/queryMountBook/remote/month/2019-11': mockData([
    { key: 1, 交易时间: '2019-11-25 06:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177324', 金额: 2300000 },
    { key: 2, 交易时间: '2019-11-26 07:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177924', 金额: 2400000 },
    { key: 3, 交易时间: '2019-11-27 08:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 4, 交易时间: '2019-11-28 09:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 5, 交易时间: '2019-11-29 10:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
    { key: 6, 交易时间: '2019-11-30 11:03', 结算方式: '跨行转账', 交易状态: '交易成功', 票据号: 'CBANK177724', 金额: 4400000 },
  ]),
}
