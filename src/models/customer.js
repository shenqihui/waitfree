import * as Service from '../services/customer';

export default {
  namespace: 'customer',
  state: {
    list: [],
  },
  reducers: {
    saveList(state, { payload: { data: list, total, page, pageSize } }) {
      return { ...state, list, total, page, pageSize };
    },
  },
  effects: {
    *list(payloads, { call, put }) {
      try {
        const data = yield call(Service.list, {});
        yield put({
          type: 'saveList',
          payload: {
            data: data.data.data,
          },
        });
      }
      catch (e) {
        // do nothind
      }
    },
  },
  subscriptions: {},
};
