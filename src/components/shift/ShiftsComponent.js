import React from 'react';
import PropTypes from 'prop-types';

import DateStepper from '../common/DateStepper';
import LoadingDots from '../common/LoadingDots';
import ShiftDataGrid from '../shift/ShiftDataGrid';
import TextInput from '../common/TextInput';
import '../../styles/ShiftsComponent.css';

const ShiftsComponent = ({ shiftData, date, isLoading, timePeriod, onFilterChange, onPreviousDateStep, onNextDateStep }) => {
  return (
    <div className="shiftPage">
      <div>
        <TextInput className="searchInput"
          placeholder="Filter employees"
          onChange={onFilterChange}
        />
        <DateStepper
          className="dateStepper"
          label={timePeriod.toUpperCase()}
          onPreviousClicked={onPreviousDateStep}
          onNextClicked={onNextDateStep}
        />
      </div>
      {
        isLoading ?
          <LoadingDots interval={100} dots={50} /> :
          <ShiftDataGrid
            data={shiftData}
            date={date}
          />
      }
    </div>
  );
};

ShiftsComponent.propTypes = {
  shiftData: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onPreviousDateStep: PropTypes.func.isRequired,
  onNextDateStep: PropTypes.func.isRequired
};

export default ShiftsComponent;
