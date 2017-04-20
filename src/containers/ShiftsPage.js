import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { requestShifts, filterEmployees } from '../actions/shiftActions';
import { getShiftData } from '../selectors/shiftSelector';
import * as dateUtil from '../utils/dateUtil';
import { getIsLoading } from '../reducers';
import ShiftsComponent from '../components/shift/ShiftsComponent';

class ShiftsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.requestShifts(this.props.date);
  }

  componentWillUpdate(nextProps) {
    if (this.props.date !== nextProps.date) {
      if (dateUtil.isValid(nextProps.date)) {
        this.props.requestShifts(nextProps.date);
      }
    }
  }

  onFilterChange = (event) => {
    this.props.filterEmployees(event.target.value);
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
    return (
      <ShiftsComponent {...this.props} onFilterChange={this.onFilterChange} onPreviousDateStep={this.onPreviousDateStep} onNextDateStep={this.onNextDateStep} />
    );
  }
}

ShiftsPage.propTypes = {
  shiftData: PropTypes.array.isRequired,
  requestShifts: PropTypes.func.isRequired,
  filterEmployees: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  shiftData: getShiftData(state),
  timePeriod: state.shifts.timePeriod,
  date: ownProps.params.date,
  isLoading: getIsLoading(state)
});


export default connect(mapStateToProps, { requestShifts, filterEmployees })(ShiftsPage);
