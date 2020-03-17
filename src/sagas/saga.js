import '@babel/polyfill';
import { all, put, takeEvery } from 'redux-saga/effects';
import { constants } from "../reducers/index";

const delay = ms => new Promise(res => setTimeout(res, ms));
// const bsbRegex = /^[0-9]{1,6}$/;

function* addSaga({ refnum, empname, bsb, accnum }) {
  yield delay(1200);
  // if (!bsb.match(bsbRegex)) {
  if (refnum !== "" && empname !== "" && bsb !== "" && accnum !== "") {
    // input checks
    yield put({ type: constants.ADD_SUCCESS });
  } else {
    yield put({ type: constants.ADD_FAIL });
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(constants.ADD, addSaga)]);
}