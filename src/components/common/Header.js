import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

/* eslint-disable no-unused-vars */
const Header = ({ isLoading }) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/shifts" activeClassName="active">Shift Planning</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Header;
