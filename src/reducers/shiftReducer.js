import * as types from '../actions/actionTypes';
import initialState from './initialState';

const shiftReducer = (state = initialState.shifts, action) => {
  switch (action.type) {
    case types.LOAD_SHIFTS_SUCCESS: {
      return {
        ...state,
        entities: action.response.entities
      };
    } case types.FILTER_EMPLOYEES: {
      return {
        ...state,
        employeeFilter: action.filter
      };
    }
    case types.LOAD_SHIFTS_ERROR: {
      return {
        ...state,
        errorMessage: action.error
      };
    }

    default:
      return state;
  }
};

export default shiftReducer;
