import React from 'react';
import PropTypes from 'prop-types';

const BakingMinsInput = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
      <label className="label">Time (min)</label>
      <input
        type="text"
        pattern="[0-9]*"
        name="bakingMinsInput"
        onChange={handleUserInput}
        value={props.value}
        label="Time (mins)"
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

BakingMinsInput.propTypes = {
  value: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired
};

export default BakingMinsInput;
