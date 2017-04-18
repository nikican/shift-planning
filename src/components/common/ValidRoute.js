import React from 'react';
import { Route, Redirect } from 'react-router';

const isAuthenticated = true;

const ValidRoute = ({ ...rest }) => (
  < Route {...rest } render={
    props => (isAuthenticated ? (
      <div> blje</div>
    ) : (
        <Redirect to={{
          pathname: '/*',
          state: { from: props.location }
        }}
        />
      )
    )
  } />
)

ValidRoute.propTypes = {

}

export default ValidRoute;
