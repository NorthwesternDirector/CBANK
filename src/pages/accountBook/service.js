import request from '../../utils/request';

export async function queryAccountListL(params) {
  const url = `/api/queryMountBook/local/${params.selectRange}/${params.selectDate}`
  return request(url)
}

export async function queryAccountListR(params) {
  const url = `/api/queryMountBook/remote/${params.selectRange}/${params.selectDate}`
  return request(url)
}
