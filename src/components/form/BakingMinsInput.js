import React from 'react';

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
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default BakingMinsInput;
