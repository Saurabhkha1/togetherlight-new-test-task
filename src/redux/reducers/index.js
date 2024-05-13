import {combineReducers} from '@reduxjs/toolkit';
import {dataSlice} from './getUserList';

export const rootReducer = combineReducers({
  dataReducers: dataSlice.reducer,
});
