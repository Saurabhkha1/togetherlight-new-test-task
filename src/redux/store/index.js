import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import {rootReducer} from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store by combining reducers and middleware
const store = configureStore({
  reducer: rootReducer,
  // Add the Redux Saga middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga to handle asynchronous actions
sagaMiddleware.run(rootSaga);

export default store;
