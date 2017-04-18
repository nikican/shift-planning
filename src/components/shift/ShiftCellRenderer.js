import React from 'react';
import PropTypes from 'prop-types';

import ShiftCard from './ShiftCard';

const ShiftCellRenderer = ({ data, dataField, className }) => {
  const value = data[dataField];

  return (
    <td className={className}>
      {value ? value.map(dataObject => {
        return <ShiftCard key={dataObject.id} data={dataObject} />;
      }) : ''}
    </td>
  );
};

ShiftCellRenderer.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  dataField: PropTypes.string.isRequired
};

export default ShiftCellRenderer;
