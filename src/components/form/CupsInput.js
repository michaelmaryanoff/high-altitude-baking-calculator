import React from 'react';
import PropTypes from 'prop-types';

const CupsInput = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
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

CupsInput.propsTypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};

export default CupsInput;
