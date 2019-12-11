import { queryAccountListL, queryAccountListR } from './service'

const Model = {
  namespace: 'accountBook',
  state: {
    accountListR: [],
    accountListL: [],
  },
  effects: {
    *fetchAccountListL({ payload }, { call, put }) {
      const response = yield call(queryAccountListL, { ...payload })
      if (response) {
        yield put({
          type: 'save',
          payload: {
            accountListL: response.data,
          },
        })
      }
    },
    *fetchAccountListR({ payload }, { call, put }) {
      const response = yield call(queryAccountListR, { ...payload })
      if (response) {
        yield put({
          type: 'save',
          payload: {
            accountListR: response.data,
          },
        })
      }
    },
    *clearData(_, { call, put }) {
        yield put({
          type: 'clear',
        })
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    clear() {
      return {
        accountListR: [],
        accountListL: [],
      }
    },
  },
}

export default Model
