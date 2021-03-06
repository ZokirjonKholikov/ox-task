import types from '../../../constants/action-types';

export const setLoading = (payload) => ({
  type: types.TABLE_ORDERS_SET_LOADING,
  payload,
});
export const setData = (payload) => ({
  type: types.TABLE_ORDERS_SET_DATA,
  payload,
});
export const setFilteredData = (payload) => ({
  type: types.TABLE_ORDERS_SET_FILTERED_DATA,
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

export const onSearch = (payload) => ({
  type: types.TABLE_ORDERS_SAGA_ONSEARCH_ACTION,
  payload,
});
