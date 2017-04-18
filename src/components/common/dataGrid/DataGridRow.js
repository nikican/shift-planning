
import React from 'react';
import PropTypes from 'prop-types';

import DataGridDefaultCellRenderer from './DataGridDefaultCellRenderer';
import '../../../styles/DataGridRow.css';

const DataGridRow = ({ columns, data }) => {
  return (
    <tr>
      {
        columns.map((column) => {
          const columnHighlight = column.highlight ? 'highlight' : '';

          const gridCell = column.cellRenderer ?
            React.createElement(column.cellRenderer, { data: data, dataField: column.dataField, className: columnHighlight, key: column.dataField }) :
            <DataGridDefaultCellRenderer key={column.dataField} data={data} dataField={column.dataField} className={columnHighlight} />;
          return gridCell;
        })
      }
    </tr>
  );
};

DataGridRow.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.array
};

export default DataGridRow;
