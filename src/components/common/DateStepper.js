import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DateStepper = ({ label, onPreviousClicked, onNextClicked, className }) => {
  return (
    <div className={classNames("btn-group", className)} role="group" aria-label="...">
      <button type="button" className="btn btn-default" aria-label="Left Align" onClick={onPreviousClicked}>
        {/* eslint-disable  react/self-closing-comp */}
        <span className="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
      </button>
      <button type="button" className="btn btn-default">{label}</button>
      <button type="button" className="btn btn-default" aria-label="Left Align" onClick={onNextClicked}>
        {/* eslint-disable  react/self-closing-comp */}
        <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
      </button>
    </div>
  );
};

DateStepper.propTypes = {
  label: PropTypes.string.isRequired,
  onPreviousClicked: PropTypes.func.isRequired,
  onNextClicked: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default DateStepper;
