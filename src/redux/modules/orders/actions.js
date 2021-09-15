import types from '../../../constants/action-types';
import orders from '../../../services/orders';
import { popFullScreen } from '../modal/actions';

export const setStatuses = (payload) => ({
  type: types.TABLE_ORDERS_SET_STATUSES,
  payload,
});

export const fetchOrderStatuses = () => ({
  type: types.TABLE_ORDERS_FETCH_STATUSES,
});

export const setPaymentStatuses = (payload) => ({
  type: types.TABLE_ORDERS_SET_PAYMENT_STATUSES,
  payload,
});

export const fetchOrderPaymentStatuses = () => ({
  type: types.TABLE_ORDERS_FETCH_PAYMENT_STATUSES,
});

export const setLoading = (payload) => ({
  type: types.TABLE_ORDERS_SET_LOADING,
  payload,
});
export const setData = (payload) => ({
  type: types.TABLE_ORDERS_SET_DATA,
  payload,
});
export const setRegions = (payload) => ({
  type: types.ORDERS_SET_REGIONS,
  payload,
});
export const setTotal = (payload) => ({
  type: types.TABLE_ORDERS_SET_TOTAL,
  payload,
});
export const setError = (payload) => ({
  type: types.TABLE_ORDERS_ERROR,
  payload,
});
export const fetchData = (payload) => ({
  type: types.TABLE_ORDERS_FETCH_DATA,
  payload,
});

export const createOrder = (payload) => (dispatch) => {
  orders
    .createOrder(payload)
    .then((resp) => {
      console.log(resp);
      dispatch(popFullScreen());
      dispatch({ type: types.ORDERS_SUBMITTING_SUCCESS });
    })
    .finally(() => {});
};

export const getOrder = (payload) => (dispatch) => {
  orders
    .getOrder1('19611')
    .then((resp) => {
      dispatch({ type: types.ORDERS_SET_ORDER, payload: resp });
    })
    .finally(() => {});
};

export const editOrder = (payload) => (dispatch) => {
  orders
    .editOrder(payload)
    .then((resp) => {
      console.log(resp);
      dispatch(popFullScreen());
      dispatch({ type: types.ORDERS_SUBMITTING_SUCCESS });
    })
    .finally(() => {});
};

export const saveBox = (payload) => ({ type: types.ORDERS_SAVE_BOX, payload });

export const clearOrder = () => ({ type: types.ORDERS_CLEAR_STATE });

export const deleteBox = (payload) => ({
  type: types.ORDERS_DELETE_BOX,
  payload,
});

export const setSingleOrder = (payload) => ({
  type: types.SET_SINGLE_ORDER_DATA,
  payload,
});

export const onSearch = (payload) => ({
  type: types.TABLE_ORDERS_SAGA_ONSEARCH_ACTION,
  payload,
});
