import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state of the data slice
const initialState = {
  isLoading: false,
  data: [],
  isFailure: false,
};

// Here we have separated the reducers into individual slices to manage specific parts of the state
export const dataSlice = createSlice({
  name: 'getDataSlice',
  initialState,
  reducers: {
    // Action to set the state for a data fetch request
    getData: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isFailure = false;
      state.errorMsg = null;
    },
    // Action to handle a successful data fetch
    getDataSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isFailure = false;
      state.errorMsg = null;
      state.data = action?.payload?.data;
    },
    // Action to handle a data fetch failure
    getDataFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isFailure = true;
      state.errorMsg = action?.payload;
    },
  },
});

export const {getData, getDataSuccess, getDataFailure} = dataSlice.actions;
