import { queryExpenseList } from './service'

const Model = {
  namespace: 'statistics',
  state: {
    expenseListByMonth: [],
  },
  effects: {
    *fetchExpenseList({ payload }, { call, put }) {
      const response = yield call(queryExpenseList, { ...payload })
      if (response) {
        yield put({
          type: 'save',
          payload: {
            expenseListByMonth: response.data,
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
        expenseListByMonth: [],
      }
    },
  },
}

export default Model
