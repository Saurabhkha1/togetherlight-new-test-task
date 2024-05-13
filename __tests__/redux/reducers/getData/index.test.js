import {
  dataSlice,
  getData,
  getDataSuccess,
  getDataFailure,
} from '../../../../src/redux/reducers/getUserList';

// const { getData } = require("../../../../src/redux/reducers/getUserList");

describe('dataSlice reducers', () => {
  it('should handle getData', () => {
    const nextState = dataSlice.reducer(undefined, getData());

    expect(nextState.isLoading).toBe(true);
    expect(nextState.isFailure).toBe(false);
    expect(nextState.errorMsg).toBe(null);
  });

  it('should handle getDataSuccess', () => {
    const payload = {data: 'someData'};
    const nextState = dataSlice.reducer(undefined, getDataSuccess(payload));

    expect(nextState.isLoading).toBe(false);
    expect(nextState.isFailure).toBe(false);
    expect(nextState.errorMsg).toBe(null);
    expect(nextState.data).toBe(payload.data);
  });

  it('should handle getDataFailure', () => {
    const errorMsg = 'Some error message';
    const nextState = dataSlice.reducer(undefined, getDataFailure(errorMsg));

    expect(nextState.isLoading).toBe(false);
    expect(nextState.isFailure).toBe(true);
    expect(nextState.errorMsg).toBe(errorMsg);
  });
});
