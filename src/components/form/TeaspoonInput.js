import React from 'react';
import PropTypes from 'prop-types';

const TeaspoonInputField = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className="field">
      <label>{props.label}</label>
      <input
        type="text"
        pattern="[0-9]*"
        name={props.name}
        onChange={handleUserInput}
        value={props.value}
        label={props.label}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

TeaspoonInputField.prototypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default TeaspoonInputField;
