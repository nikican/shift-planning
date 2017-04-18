import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as shiftActions from '../actions/shiftActions';
import { getShiftData } from '../selectors/shiftSelector';
import ShiftDataGrid from '../components/shift/ShiftDataGrid';
import TextInput from '../components/common/TextInput';
import DateStepper from '../components/common/DateStepper';
import * as dateUtil from '../utils/dateUtil';
import LoadingDots from '../components/common/LoadingDots';
import { getIsLoading } from '../reducers';
import '../styles/ShiftPage.css';

class ShiftsPage extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.requestShifts(this.props.date);
  }

  componentWillUpdate(nextProps) {
    if (this.props.date !== nextProps.date) {
      if (dateUtil.isValid(nextProps.date)) {
        this.props.actions.requestShifts(nextProps.date);
      }
    }
  }

  onFilterChange = (event) => {
    this.props.actions.filterEmployees(event.target.value);
  }

  onPreviousDateStep = () => {
    if (!this.props.isLoading) {
      browserHistory.push(`/shifts/${dateUtil.getPreviousDate(this.props.date, this.props.timePeriod)}`);
    }
  }

  onNextDateStep = () => {
    if (!this.props.isLoading) {
      browserHistory.push(`/shifts/${dateUtil.getNextDate(this.props.date, this.props.timePeriod)}`);
    }
  }

  render() {
    const { shiftData, date, timePeriod, isLoading } = this.props;

    return (
      <div className="shiftPage">
        <div>
          <TextInput className="searchInput"
            placeholder="Filter employees"
            onChange={this.onFilterChange}
          />
          <DateStepper
            className="dateStepper"
            label={timePeriod.toUpperCase()}
            onPreviousClicked={this.onPreviousDateStep}
            onNextClicked={this.onNextDateStep}
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
  }
}

ShiftsPage.propTypes = {
  shiftData: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    shiftData: getShiftData(state),
    timePeriod: state.shifts.timePeriod,
    date: ownProps.params.date,
    isLoading: getIsLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shiftActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftsPage);
