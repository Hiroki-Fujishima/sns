import { all } from 'redux-saga/effects';
import sampleController from '../sample/controllers/sampleController';

export default function* routeSaga() {
   yield all([sampleController()]);
}