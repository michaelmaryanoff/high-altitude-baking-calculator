import React from 'react';
import { PropTypes } from 'prop-types';

const TextInputField = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`center aligned field`}>
      <label className="label">{props.label}</label>
      <input
        type="text"
        pattern="[0-9]*"
        name={props.name}
        placeholder={props.placeholder}
        onChange={handleUserInput}
        value={props.value}
        label={props.label}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleOnChange: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default TextInputField;
