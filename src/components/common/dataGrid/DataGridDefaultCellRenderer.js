import React from 'react';
import PropTypes from 'prop-types';

const DataGridDefaultCellRenderer = ({ data, dataField, className }) => {
  const value = data[dataField];

  return <td className={className}>{value || ''}</td>;
};

DataGridDefaultCellRenderer.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string
};

export default DataGridDefaultCellRenderer;
