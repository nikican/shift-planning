import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/EmployeeCellRender.css';

const EmployeeCellRenderer = ({ data, className }) => {
  return (
    <td className={className}>
      <div className="employeeCellRender">
        <div className="avatar" >
          <img src={data.avatar} alt="Avatar" />
        </div>
        <div className="employeeName">{data.displayName}</div>
        <div className="position">{data.positionName}</div>
      </div>
    </td>
  );
};

EmployeeCellRenderer.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string
};

export default EmployeeCellRenderer;
