import {all} from 'redux-saga/effects';

import {watchDataRequest} from '../saga/getData';

// Single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchDataRequest()]);
}
