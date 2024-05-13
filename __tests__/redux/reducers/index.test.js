import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../../../src/redux/reducers';
import {dataSlice} from '../../../src/redux/reducers/getUserList';

describe('Root Reducer', () => {
  it('should return the initial state', () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    const initialState = store.getState();
    expect(initialState).toEqual({
      dataReducers: dataSlice.reducer(undefined, {}),
    });
  });

  it('should handle actions from dataReducers', () => {
    const store = configureStore({
      reducer: rootReducer,
    });

    const action = {type: 'dataSlice/someActionType', payload: 'somePayload'};
    store.dispatch(action);

    const state = store.getState();
    expect(state.dataReducers).toEqual(dataSlice.reducer(undefined, action));
  });
});
