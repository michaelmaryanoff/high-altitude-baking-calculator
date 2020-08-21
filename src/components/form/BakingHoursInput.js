import React from 'react';

const BakingHoursInput = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
      <label className="label">Time (h)</label>
      <input
        type="text"
        pattern="[0-9]*"
        name="bakingHoursInput"
        onChange={handleUserInput}
        value={props.value}
        label="Time (hours)"
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default BakingHoursInput;
