import * as types from './actionTypes';
import * as actions from './fetchStatusActions';

describe('Actions', () => {
  it('should create an action to begin ajax call', () => {
    const actual = actions.beginFetching();
    const expected = {
      type: types.BEGIN_FETCHING
    };

    expect(actual).toEqual(expected);
  });
});
