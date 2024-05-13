import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchData,
  handleGetData,
  watchDataRequest,
} from '../../../../src/redux/saga/getData';
import {
  getData,
  getDataFailure,
} from '../../../../src/redux/reducers/getUserList';

describe('fetchData Saga', () => {
  it('should handle successful data fetch', () => {
    const action = {payload: {}};
    const gen = handleGetData(action);

    expect(gen.next().value).toEqual(call(fetchData, action));
  });

  it('should watch for getData action', () => {
    const gen = watchDataRequest();

    expect(gen.next().value).toEqual(takeEvery(getData, handleGetData));
    expect(gen.next().done).toBe(true);
  });

  it('should handle data fetch failure', () => {
    const action = {payload: {}};
    const gen = handleGetData(action);

    expect(gen.next().value).toEqual(call(fetchData, action));
    expect(gen.throw(new Error('Some error')).value).toEqual(
      put(getDataFailure('Error')),
    );
    expect(gen.next().done).toBe(true);
  });
});

describe('handleGetImgVideos Saga', () => {
  it('should put getDataSuccess when response has results', () => {
    const action = {};
    const generator = handleGetData(action);

    expect(generator.next().value).toEqual(call(fetchData, action));
  });

  it('should put getDataFailure when response does not have results', () => {
    const action = {};
    const generator = handleGetData(action);

    expect(generator.next().value).toEqual(call(fetchData, action));
  });

  it('should put getDataFailure when there is an error', () => {
    const action = {};
    const generator = handleGetData(action);

    expect(generator.next().value).toEqual(call(fetchData, action));
    expect(generator.throw('Error').value).toEqual(
      put(getDataFailure('Error')),
    );
  });
});

describe('watchDataRequest Saga', () => {
  it('should watch for getData action and call watchDataRequest', () => {
    const generator = watchDataRequest();

    expect(generator.next().value).toEqual(takeEvery(getData, handleGetData));
  });
});
