import React from 'react';
import PropTypes from 'prop-types';

const DataGridDefaultHeaderRenderer = ({ data }) => {
  return <th>{data || ''}</th>;
};

DataGridDefaultHeaderRenderer.propTypes = {
  data: PropTypes.string
};

export default DataGridDefaultHeaderRenderer;
