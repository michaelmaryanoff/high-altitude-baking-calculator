import React from 'react';
import PropTypes from 'prop-types';

const TextOutputField = props => {
  return (
    <div className="field">
      <label>{props.label}</label>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        readOnly={true}
        value={props.value}
        label={props.label}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

TextOutputField.propTypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default TextOutputField;
