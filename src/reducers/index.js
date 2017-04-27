import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shifts from './shiftReducer';
import isLoading from './fetchStatusReducer';

const rootReducer = combineReducers({
  shifts,
  isLoading,
  routing: routerReducer
});

export default rootReducer;

export const getIsLoading = (state) => {
  return state.isLoading;
};
