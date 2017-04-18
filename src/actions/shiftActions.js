import { normalize } from 'normalizr';

import * as types from './actionTypes';
import shiftApi from '../api/mockShiftApi';
import { beginAjaxCall } from './ajaxStatusActions';
import * as shiftSchema from './shiftSchema';
import { getIsLoading } from '../reducers';

export const loadShiftsSuccess = (normalizedResponse) => ({
  type: types.LOAD_SHIFTS_SUCCESS,
  response: normalizedResponse
});

export const loadShiftsError = (error) => ({
  type: types.LOAD_SHIFTS_ERROR,
  error
});

export const requestShifts = (date) => (dispatch, getState) => {
  if (getIsLoading(getState())) {
    return Promise.resolve;
  }

  dispatch(beginAjaxCall());

  return shiftApi.fetchShifts(date).then((response) => {
    //dispatch with normalized response data
    dispatch(loadShiftsSuccess(normalize(response, {
      shifts: [shiftSchema.shift]
    })));
  }).catch((error) => {
    dispatch(loadShiftsError(error));
    throw error;
  });
};

export const filterEmployees = (filter) => ({
  type: types.FILTER_EMPLOYEES,
  filter
});
