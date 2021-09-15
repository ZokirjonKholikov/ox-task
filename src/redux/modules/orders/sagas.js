import { takeLatest, put, delay } from "redux-saga/effects";
import types from "../../../constants/action-types";
import service from "../../../services/orders";
import {
  setData,
  setError,
  setLoading,
  setTotal,
  setStatuses,
  setPaymentStatuses,
} from "./actions";
import { dataSelector } from "./selectors";

function* fetchData({ payload }) {
  try {
    if (payload.isSearch) yield delay(500);
    yield put(setLoading(true));
    const res = yield service.getAll(payload.query);
    const { data, total } = dataSelector(res);
    yield put(setError(""));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
  console.log(payload);
}

function* fetchStatuses() {
  try {
    const statuses = yield service.getAllStatus();
    yield put(setStatuses(statuses.data.statuses));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* fetchPaymentStatuses() {
  try {
    const statuses = yield service.getAllPaymentStatus();
    yield put(setPaymentStatuses(statuses.data.statuses));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* ordersSaga() {
  yield takeLatest(types.TABLE_ORDERS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ORDERS_SAGA_ONSEARCH_ACTION, onSearch);
  yield takeLatest(types.TABLE_ORDERS_FETCH_STATUSES, fetchStatuses);
  yield takeLatest(
    types.TABLE_ORDERS_FETCH_PAYMENT_STATUSES,
    fetchPaymentStatuses
  );
}