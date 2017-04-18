import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, onChange, placeholder, value, error, className }) => {
  return (
    <div className={className} >
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string
};

export default TextInput;
