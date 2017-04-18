import * as types from './actionTypes';
import * as actions from './shiftActions';

describe('Actions', () => {
  const appState = {
    error: 'load failed',
    employeeFilter: 'name',
    response: {
      entities: {
        shifts: {
          '58f532bf33f35676473e2f85': {
            name: 'test name'
          }
        }
      }
    }
  };

  it('should create an action to fetch shifts', () => {
    // we expect this to return a function since it is a thunk
    expect(typeof (actions.requestShifts('2017-04-13'))).toEqual('function');
  });

  it('should create an action to filter employees', () => {
    const actual = actions.filterEmployees(appState.employeeFilter);
    const expected = {
      type: types.FILTER_EMPLOYEES,
      filter: appState.employeeFilter
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action for load shifts error', () => {
    const actual = actions.loadShiftsError(appState.error);
    const expected = {
      type: types.LOAD_SHIFTS_ERROR,
      error: appState.error
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action for load shifts success', () => {
    const actual = actions.loadShiftsSuccess(appState.response);
    const expected = {
      type: types.LOAD_SHIFTS_SUCCESS,
      response: appState.response
    };

    expect(actual).toEqual(expected);
  });
});
