import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getDataFailure,
  getData,
  getDataSuccess,
} from '../../reducers/getUserList';
import customFetch from '../../../network/customFetch';

// Here we are defining a function to fetch data from an API
export function fetchData() {
  const config = {
    method: 'GET',
  };
  // Return a promise for making the API request using our custom function
  return customFetch(config?.method);
}

// Define a Redux Saga generator function to handle the getData action
export function* handleGetData(action) {
  let genericErrorMsg = 'Error';
  try {
    // Call the fetchData function to make the API request
    const response = yield call(fetchData, action);

    // Check if the response contains results
    if (Array.isArray(response) && response.length) {
      // If results exist, dispatch a success action with the data

      yield put(getDataSuccess({data: response}));
    } else {
      // If results are empty, dispatch a failure action with the error message

      yield put(getDataFailure(genericErrorMsg));
    }
  } catch (error) {
    // If an error occurs during the API call, dispatch a failure action with the default error message
    yield put(getDataFailure(genericErrorMsg));
  }
}

// Our watcher Saga to listen for the getData action
export function* watchDataRequest() {
  yield takeEvery(getData, handleGetData);
}
