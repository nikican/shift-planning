import * as types from './actionTypes';
import * as actions from './ajaxStatusActions';

describe('Actions', () => {
  it('should create an action to begin ajax call', () => {
    const actual = actions.beginAjaxCall();
    const expected = {
      type: types.BEGIN_AJAX_CALL
    };

    expect(actual).toEqual(expected);
  });
});
