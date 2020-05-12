import { all } from 'redux-saga/effects';
import sampleController from '../sample/samplecontrollers/sampleController';

export default function* routeSaga() {
   yield all([sampleController()]);
}