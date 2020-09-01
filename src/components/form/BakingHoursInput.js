import React from 'react';
import PropTypes from 'prop-types';

const BakingHoursInput = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className="field">
      <label className="label">Time (hr)</label>
      <input
        type="text"
        pattern="[0-9]*"
        name="bakingHoursInput"
        onChange={handleUserInput}
        value={props.value}
        label="Time (hours)"
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

BakingHoursInput.propTypes = {
  value: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired
};

export default BakingHoursInput;
