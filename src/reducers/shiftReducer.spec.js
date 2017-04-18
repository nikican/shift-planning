import shiftReducer from './shiftReducer';
import * as types from '../actions/actionTypes';

describe('shiftReducer', () => {

  it('should initialize state', () => {
    const state = shiftReducer(undefined, {});
    expect(state).toEqual(
      {
        entities: {
          shifts: {},
          positions: {},
          employees: {}
        },
        employeeFilter: '',
        timePeriod: 'week',
        errorMessage: ''
      }
    );
  });

  it('should handle LOAD_SHIFTS_SUCCESS', () => {
    let state;
    state = shiftReducer(
      {
        entities: {
          shifts: {},
          positions: {},
          employees: {}
        },
        employeeFilter: '',
        timePeriod: 'week',
        errorMessage: ''
      }, {
        type: types.LOAD_SHIFTS_SUCCESS, response: {
          entities: {
            positions: {
              '58f532bf33f35676473e2f85': {
                displayName: 'Waiter'
              }
            },
            employees: {},
            shifts: {}
          }
        }
      });
    expect(state).toEqual(
      {
        entities: {
          positions: {
            '58f532bf33f35676473e2f85': {
              displayName: 'Waiter'
            }
          },
          shifts: {},
          employees: {}
        },
        employeeFilter: '',
        timePeriod: 'week',
        errorMessage: ''
      }
    );
  });

  it('should handle LOAD_SHIFTS_ERROR', () => {
    let state;
    state = shiftReducer(
      {
        entities: {
          shifts: {},
          positions: {},
          employees: {}
        },
        employeeFilter: '',
        timePeriod: 'week',
        errorMessage: ''
      }, {
        type: types.LOAD_SHIFTS_ERROR, error: 'loading error'
      });
    expect(state).toEqual(
      {
        entities: {
          shifts: {},
          positions: {},
          employees: {}
        },
        employeeFilter: '',
        timePeriod: 'week',
        errorMessage: 'loading error'
      }
    );
  });

  it('should handle FILTER_EMPLOYEES', () => {
    let state;
    state = shiftReducer(
      {
        entities: {},
        employeeFilter: ''
      },
      { type: types.FILTER_EMPLOYEES, filter: 'ab' });
    expect(state).toEqual(
      {
        entities: {},
        employeeFilter: 'ab'
      });
  });

});
