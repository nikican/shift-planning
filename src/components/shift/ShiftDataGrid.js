import React from 'react';
import PropTypes from 'prop-types';

import DataGrid from '../common/dataGrid/DataGrid';
import * as dateUtil from '../../utils/dateUtil';
import ShiftCellRender from './ShiftCellRenderer';
import EmployeeCellRender from './EmployeeCellRender';

const ShiftDataGrid = ({ data, date }) => {
  //create columns metadata
  let columns = [{
    headerLabel: dateUtil.getWeeksDateRangeForDate(date), //displayed in column header
    cellRenderer: EmployeeCellRender, // component which will display data in this column
    dataField: '', // look for data in this property on an object
    highlight: false
  }];

  const columnLabels = dateUtil.getFormattedDatesForAWeek(date, dateUtil.shortDateFormat);
  const columnDataFields = dateUtil.getFormattedDatesForAWeek(date, dateUtil.simpleDateFormat);
  const todaysDate = dateUtil.getTodaysDate();

  for (let i = 0; i < 7; i++) {
    columns.push({
      headerLabel: columnLabels[i],
      dataField: columnDataFields[i],
      cellRenderer: ShiftCellRender,
      highlight: (columnDataFields[i] === todaysDate)
    });
  }

  return <DataGrid dataProvider={data} columns={columns} tableClassName={"table table-bordered table-responsive"} />;
};

ShiftDataGrid.propTypes = {
  data: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
};

export default ShiftDataGrid;
