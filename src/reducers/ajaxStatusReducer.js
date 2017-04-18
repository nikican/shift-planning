import * as types from '../actions/actionTypes';
import initialState from './initialState';

const ajaxStatusReducer = (state = initialState.isLoading, action) => {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state = true;
  } else if (actionTypeEndsInError(action.type) || actionTypeEndsInSuccess(action.type)) {
    return state = false;
  }

  return state;
};

const actionTypeEndsInSuccess = (type) => {
  return type ? type.substring(type.length - 8) == '_SUCCESS' : false;
};

const actionTypeEndsInError = (type) => {
  return type ? type.substring(type.length - 6) == '_ERROR' : false;
};

export default ajaxStatusReducer;
