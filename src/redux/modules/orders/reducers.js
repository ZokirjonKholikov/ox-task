import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  order: {
    boxes: [],
  },
  loading: false,
  total: 0,
  error: '',
  statuses: [],
  paymentStatuses: [],
  regions: [],
  singleOrder: {},
};

const map = {
  [types.TABLE_ORDERS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),
  [types.TABLE_ORDERS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),

  [types.SET_SINGLE_ORDER_DATA]: (state, { payload }) => ({
    ...state,
    singleOrder: payload,
  }),

  [types.TABLE_ORDERS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.TABLE_ORDERS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [types.TABLE_ORDERS_SET_STATUSES]: (state, { payload }) => ({
    ...state,
    statuses: payload,
  }),
  [types.TABLE_ORDERS_SET_PAYMENT_STATUSES]: (state, { payload }) => ({
    ...state,
    paymentStatuses: payload,
  }),
  [types.ORDERS_SET_ORDER]: (state, { payload }) => ({
    ...state,
    order: payload,
  }),
  [types.ORDERS_SAVE_BOX]: (state, { payload }) => ({
    ...state,
    order: {
      ...state.order,
      boxes: payload,
    },
  }),
  [types.ORDERS_DELETE_BOX]: (state, { payload }) => ({
    ...state,
    order: {
      ...state.order,
      boxes: payload,
    },
  }),
  [types.ORDERS_SUBMITTING_SUCCESS]: (state, { payload }) => ({
    ...state,
    order: {
      boxes: [],
    },
  }),
  [types.ORDERS_SUBMITTING_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [types.ORDERS_CLEAR_STATE]: (state, { payload }) => ({
    ...state,
    order: {
      boxes: [],
    },
  }),

  [types.ORDERS_SET_REGIONS]: (state, { payload }) => ({
    ...state,
    regions: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
