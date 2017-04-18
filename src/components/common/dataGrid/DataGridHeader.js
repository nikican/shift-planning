import React from 'react';
import PropTypes from 'prop-types';

import DataGridDefaultHeaderRenderer from './DataGridDefaultHeaderRenderer';

const DataGridHeader = ({ columns, className }) => {
  return (
    <thead className={className}>
      <tr>
        {
          columns.map((column) => {
            const headerRenderer = column.headerRenderer ?
              React.createElement(column.headerRenderer, { data: column.headerLabel, key: column.dataField }) :
              <DataGridDefaultHeaderRenderer key={column.headerLabel} data={column.headerLabel} />;
            return headerRenderer;
          })
        }
      </tr>
    </thead>
  );
};

DataGridHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default DataGridHeader;
