import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionType";

function* run(action) {
  console.log("----------------------- in -action");
  console.log(action);

  const status = yield select((state) => state);
  const num = status.calc.num;
  const nextNum = num * 1;

  if (nextNum < 100) {
    yield put({
      type: TYPES,
      payload: nextNum,
    });
  }
}

export default { run };
