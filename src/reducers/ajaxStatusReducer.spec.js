import ajaxStatusReducer from './ajaxStatusReducer';
import * as ActionTypes from '../actions/actionTypes';

describe('ajaxStatusReducer', () => {

  it('should initialize state', () => {
    const state = ajaxStatusReducer(undefined, {});
    expect(state).toEqual(false);
  });


  it('should handle BEGIN_AJAX_CALL', () => {
    const state = ajaxStatusReducer(false, { type: ActionTypes.BEGIN_AJAX_CALL });
    expect(state).toEqual(true);
  });

  it('should handle LOAD_SHIFTS_SUCCESS', () => {
    let state;
    state = ajaxStatusReducer(true, { type: ActionTypes.LOAD_SHIFTS_SUCCESS, response: {} });
    expect(state).toEqual(false);
  });

  it('should handle LOAD_SHIFTS_ERROR', () => {
    let state;
    state = ajaxStatusReducer(true, { type: ActionTypes.LOAD_SHIFTS_ERROR, response: {} });
    expect(state).toEqual(false);
  });
});
