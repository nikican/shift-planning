import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ShiftsPage from './containers/ShiftsPage';
import NotFoundPage from './components/notFound/NotFoundPage';
import * as dateUtil from '../src/utils/dateUtil';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="shifts">
      {/*redirect '/shifts' route to route '/shifts/*todays date*' making parameter ":date"" available to interested components*/}
      <IndexRedirect to={dateUtil.getTodaysDate()} />
      <Route path=":date" component={ShiftsPage} />
    </Route>
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
