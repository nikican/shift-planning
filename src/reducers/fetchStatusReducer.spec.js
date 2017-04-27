import fetchStatusReducer from './fetchStatusReducer';
import * as ActionTypes from '../actions/actionTypes';

describe('fetchStatusReducer', () => {

  it('should initialize state', () => {
    const state = fetchStatusReducer(undefined, {});
    expect(state).toEqual(false);
  });


  it('should handle BEGIN_AJAX_CALL', () => {
    const state = fetchStatusReducer(false, { type: ActionTypes.BEGIN_FETCHING });
    expect(state).toEqual(true);
  });

  it('should handle LOAD_SHIFTS_SUCCESS', () => {
    let state;
    state = fetchStatusReducer(true, { type: ActionTypes.LOAD_SHIFTS_SUCCESS, response: {} });
    expect(state).toEqual(false);
  });

  it('should handle LOAD_SHIFTS_ERROR', () => {
    let state;
    state = fetchStatusReducer(true, { type: ActionTypes.LOAD_SHIFTS_ERROR, response: {} });
    expect(state).toEqual(false);
  });
});
