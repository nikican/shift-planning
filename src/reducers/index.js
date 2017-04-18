import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shifts from './shiftReducer';
import isLoading from './ajaxStatusReducer';

const rootReducer = combineReducers({
  shifts,
  isLoading,
  routing: routerReducer
});

export default rootReducer;

export const getIsLoading = (state) => {
  return state.isLoading;
};
