import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import DataGridRow from './DataGridRow';
import DataGridHeader from './DataGridHeader';
import '../../../styles/DataGrid.css';

const DataGrid = ({ columns, dataProvider, tableClassName, headerClassName, rowClassName }) => {
  return (
    <table className={className(tableClassName, "dataGrid")}>
      <DataGridHeader columns={columns} className={headerClassName} />
      <tbody>
        {
          dataProvider.map(data => {
            return <DataGridRow key={data.id} data={data} columns={columns} className={rowClassName} />;
          })
        }
      </tbody>
    </table>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    React.PropTypes.shape({
      headerLabel: PropTypes.string.isRequired,
      dataField: PropTypes.string,
      cellRenderer: PropTypes.func,
      styles: PropTypes.string
    })).isRequired,
  dataProvider: PropTypes.array.isRequired,
  headerClassName: PropTypes.string,
  rowClassName: PropTypes.string,
  tableClassName: PropTypes.string
};

export default DataGrid;
