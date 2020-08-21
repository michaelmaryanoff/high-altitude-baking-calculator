import React from 'react';

import { useDispatch } from 'react-redux';

const BakingMinsInput = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
      <label>Time (m)</label>
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
