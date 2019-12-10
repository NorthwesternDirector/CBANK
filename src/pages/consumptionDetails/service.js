import request from '../../utils/request';

export async function queryExpenseList(params) {
  const url = '/api/queryExpenseList'
  return request(url)
}
