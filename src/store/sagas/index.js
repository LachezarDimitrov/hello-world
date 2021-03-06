import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { fetchOrdersSaga, purchaseBurgerSaga } from './order';
import { initIngredientsSaga } from './burgerBuilder';
import { takeEvery, all } from 'redux-saga/effects';
import {
  AUTH_INITIATE_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  INIT_INGREDIENTS,
  AUTH_CHECK_STATE,
  PURCHASE_BURGER,
  AUTH_USER,
  FETCH_ORDERS,
} from '../actions/actionTypes';

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),

    takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),

    takeEvery(AUTH_USER, authUserSaga),

    takeEvery(AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield all([
    takeEvery(PURCHASE_BURGER, purchaseBurgerSaga),

    takeEvery(FETCH_ORDERS, fetchOrdersSaga),
  ]);
}
