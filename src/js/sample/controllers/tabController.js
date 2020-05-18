import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_SAMPLE_TAB_REQUEST } from "../../const/actionType";
import tabService from "../services/sampleService";

function* tab(action) {
  yield fork(tabService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_SAMPLE_TAB_REQUEST);
}
