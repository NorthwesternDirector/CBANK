import request from '../../utils/request';

export async function queryExpenseList(params) {
  const url = `/api/queryExpenseListByMonth/${params.date}`
  return request(url)
}
