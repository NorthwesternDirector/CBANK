import { queryExpenseList } from './service'

const Model = {
  namespace: 'consumptionDetails',
  state: {
    expenseList: [],
  },
  effects: {
    *fetchExpenseList(_, { call, put }) {
      const response = yield call(queryExpenseList)
      if (response) {
        yield put({
          type: 'save',
          payload: {
            expenseList: response.data,
          },
        })
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    clear() {
      return {
        expenseList: [],
      }
    },
  },
}

export default Model
