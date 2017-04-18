import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/ShiftCard.css';

const ShiftCard = ({ data }) => {
  return (
    <div className="shiftCard" style={{ backgroundColor: data.positionColor }}>
      <div className="title">{data.displayName}</div>
      <div>{data.positionName}</div>
      <div>{data.duration}</div>
    </div>
  );
};

ShiftCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ShiftCard;
